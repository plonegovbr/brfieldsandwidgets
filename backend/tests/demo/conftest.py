from collections.abc import Generator
from Products.CMFPlone.Portal import PloneSite

import pytest
import transaction


@pytest.fixture(scope="class")
def portal(portal_class) -> Generator[PloneSite]:
    """Yield the class-scoped Plone site."""
    yield portal_class


@pytest.fixture
def committed_portal(functional_portal) -> PloneSite:
    """Return the functional site, with the ``portal`` marker committed.

    ``functional_portal`` applies the profiles of ``@pytest.mark.portal`` but
    does not commit them, so the server answering the HTTP requests would not
    see them. The functional layer stacks a storage per test, so committing
    here does not leak into other tests.
    """
    transaction.commit()
    return functional_portal
