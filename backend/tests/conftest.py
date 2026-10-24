from collections.abc import Generator
from plonegovbr.brfields.testing import ACCEPTANCE_TESTING
from plonegovbr.brfields.testing import FUNCTIONAL_TESTING
from plonegovbr.brfields.testing import INTEGRATION_TESTING
from pytest_plone import fixtures_factory

import pytest


pytest_plugins = ["pytest_plone"]


globals().update(
    fixtures_factory((
        (ACCEPTANCE_TESTING, "acceptance"),
        (FUNCTIONAL_TESTING, "functional"),
        (INTEGRATION_TESTING, "integration"),
    ))
)


@pytest.fixture(scope="session", autouse=True)
def no_importer_commits() -> Generator[None]:
    """Keep plone.exportimport from committing while importing example content.

    The demo profile imports its content with plone.exportimport, which commits
    every few objects by default. A commit inside a test layer persists the
    import for every test that follows, so the demo content type and content
    would leak into tests that never applied the demo profile.
    """
    from plone.exportimport.importers.base import BaseImporter

    with pytest.MonkeyPatch.context() as mp:
        mp.setattr(BaseImporter, "intermediate_commits", False)
        yield
