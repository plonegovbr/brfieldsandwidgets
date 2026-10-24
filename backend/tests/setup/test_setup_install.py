from . import DEFAULT_PROFILE
from . import DEMO_PROFILE
from . import UNINSTALL_PROFILE
from plone import api
from plonegovbr.brfields import PACKAGE_NAME
from plonegovbr.brfields.setuphandlers import HiddenProfiles

import pytest


class TestSetupInstall:
    @pytest.fixture(autouse=True)
    def _setup(self, portal) -> None:
        self.portal = portal

    def test_addon_installed(self):
        """The product is installed, with no upgrade pending."""
        assert api.addon.get(PACKAGE_NAME).flags == ["installed"]

    def test_browserlayer(self, browser_layers):
        """Test that IBrowserLayer is registered."""
        from plonegovbr.brfields.interfaces import IBrowserLayer

        assert IBrowserLayer in browser_layers

    def test_latest_version(self, profile_last_version):
        """Test latest version of default profile."""
        assert profile_last_version(DEFAULT_PROFILE) == "1000"

    @pytest.mark.parametrize(
        "profile",
        [
            "plone.restapi:default",
            "plone.volto:default",
        ],
    )
    def test_dependency_installed(self, setup_tool, profile: str):
        """Test if a dependency profile is installed."""
        # "unknown", never None, for a profile that was not installed.
        assert setup_tool.getLastVersionForProfile(profile) != "unknown"

    def test_demo_profile_not_installed(self, setup_tool):
        """The demo profile is not applied by the default profile."""
        assert setup_tool.getLastVersionForProfile(DEMO_PROFILE) == "unknown"

    def test_demo_type_not_installed(self):
        """The demo content type comes only with the demo profile."""
        types_tool = api.portal.get_tool("portal_types")
        assert "DemoContent" not in types_tool.objectIds()


class TestHiddenProfiles:
    def test_non_installable_profiles(self):
        """Only the uninstall profile is hidden."""
        assert HiddenProfiles().getNonInstallableProfiles() == [UNINSTALL_PROFILE]

    def test_non_installable_products(self):
        """The upgrades package is hidden from the add-ons control panel."""
        assert HiddenProfiles().getNonInstallableProducts() == [
            f"{PACKAGE_NAME}.upgrades"
        ]
