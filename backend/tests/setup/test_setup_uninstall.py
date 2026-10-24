from collections.abc import Generator
from plone import api
from plonegovbr.brfields import PACKAGE_NAME
from Products.CMFPlone.Portal import PloneSite

import pytest


@pytest.fixture(scope="class")
def uninstalled(portal) -> Generator[PloneSite]:
    """Uninstall the package once for the whole class."""
    installer = api.content.get_view("installer", portal, portal.REQUEST)
    installer.uninstall_product(PACKAGE_NAME)
    yield portal


class TestSetupUninstall:
    @pytest.fixture(autouse=True)
    def _setup(self, uninstalled) -> None:
        self.portal = uninstalled

    def test_addon_uninstalled(self):
        """Test if plonegovbr.brfields is uninstalled."""
        assert api.addon.get(PACKAGE_NAME).flags == ["available"]

    def test_browserlayer_not_registered(self, browser_layers):
        """Test that IBrowserLayer is not registered."""
        from plonegovbr.brfields.interfaces import IBrowserLayer

        assert IBrowserLayer not in browser_layers
