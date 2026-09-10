#!/usr/bin/env python3
"""Contrôles structurels du site, sans dépendance externe."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import re
import sys


ROOT = Path(__file__).resolve().parent.parent
INDEX = ROOT / "index.html"


class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.links = []
        self.resources = []

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        if "id" in values:
            self.ids.append(values["id"])
        if tag == "a" and values.get("href"):
            self.links.append(values["href"])
        if tag in {"img", "script", "iframe"} and values.get("src"):
            self.resources.append(values["src"])
        if tag == "link" and values.get("href"):
            self.resources.append(values["href"])


def region(source, declaration):
    match = re.search(rf"const {declaration} = \[(.*?)\n\];", source, re.S)
    if not match:
        raise AssertionError(f"Déclaration {declaration} introuvable")
    return match.group(1)


def check():
    source = INDEX.read_text(encoding="utf-8")
    parser = SiteParser()
    parser.feed(source)
    errors = []

    duplicates = sorted({value for value in parser.ids if parser.ids.count(value) > 1})
    if duplicates:
        errors.append("Identifiants HTML dupliqués : " + ", ".join(duplicates))

    node_source = region(source, "NOEUDS")
    node_ids = re.findall(r"\{id:'([^']+)'", node_source)
    node_set = set(node_ids)
    if len(node_ids) != len(node_set):
        errors.append("Les identifiants de NOEUDS ne sont pas uniques")

    parents = re.findall(r"parent:'([^']+)'", node_source)
    missing_parents = sorted(set(parents) - node_set)
    if missing_parents:
        errors.append("Parents de nœuds inconnus : " + ", ".join(missing_parents))

    edge_source = region(source, "TRANSVERSALES")
    edge_nodes = []
    for left, right in re.findall(r"\{a:'([^']+)', b:'([^']+)'", edge_source):
        edge_nodes.extend((left, right))
    missing_edge_nodes = sorted(set(edge_nodes) - node_set)
    if missing_edge_nodes:
        errors.append("Arêtes vers des nœuds inconnus : " + ", ".join(missing_edge_nodes))

    content_ids = set(parser.ids)
    without_content = sorted(node_set - content_ids - {"profil", "certifications"})
    if without_content:
        errors.append("Nœuds sans fiche HTML : " + ", ".join(without_content))

    for value in parser.links + parser.resources:
        if "{{" in value or value.startswith(("data:", "mailto:", "javascript:")):
            continue
        parsed = urlsplit(value)
        if parsed.scheme:
            if parsed.scheme not in {"http", "https"}:
                errors.append(f"Protocole inattendu : {value}")
            continue
        if value.startswith("#"):
            fragment = unquote(parsed.fragment)
            if fragment and fragment not in content_ids:
                errors.append(f"Fragment sans cible : {value}")
            continue
        path = unquote(parsed.path)
        target = (INDEX.parent / path).resolve()
        if path.endswith("/"):
            target /= "index.html"
        if not target.exists():
            errors.append(f"Ressource locale absente : {value}")

    if errors:
        print("\n".join(f"ERREUR : {error}" for error in errors), file=sys.stderr)
        return 1
    print(
        f"OK — {len(node_ids)} nœuds, "
        f"{len(edge_nodes) // 2} arêtes transversales, "
        f"{len(parser.links)} liens, aucune cible manquante."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(check())
