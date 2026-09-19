"""Cas de régression pour les liens que la publication doit refuser."""

import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location("check_site", Path(__file__).with_name("check-site.py"))
site = importlib.util.module_from_spec(spec)
spec.loader.exec_module(site)


class ReferencesTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        original_root = site.ROOT
        self.addCleanup(setattr, site, "ROOT", original_root)
        site.ROOT = Path(self.temp.name).resolve()
        self.page = site.ROOT / "projet" / "index.html"
        self.page.parent.mkdir()
        self.page.write_text('<h1 id="titre">Projet</h1>')
        parser = site.SiteParser()
        parser.feed(self.page.read_text())
        self.pages = {self.page: parser}

    def test_relative_page_and_fragment(self):
        self.assertIsNone(site.check_reference(self.page, "../projet/#titre", self.pages))

    def test_site_root_path(self):
        self.assertIsNone(site.check_reference(self.page, "/projet/#titre", self.pages))

    def test_missing_fragment(self):
        self.assertIn("Fragment sans cible", site.check_reference(self.page, "#absent", self.pages))

    def test_missing_font_from_stylesheet(self):
        self.assertIn("Ressource locale absente", site.check_reference(self.page.with_name("style.css"), "fonts/absente.woff2", self.pages))

    def test_external_url_is_not_local(self):
        self.assertIsNone(site.check_reference(self.page, "//example.org/image.png", self.pages))

    def test_encoded_filename(self):
        (self.page.parent / "aperçu été.pdf").write_bytes(b"pdf")
        self.assertIsNone(site.check_reference(self.page, "aper%C3%A7u%20%C3%A9t%C3%A9.pdf", self.pages))

    def test_cannot_escape_site(self):
        self.assertIn("hors du site", site.check_reference(self.page, "../../private.txt", self.pages))


if __name__ == "__main__":
    unittest.main()
