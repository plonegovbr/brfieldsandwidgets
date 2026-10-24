from plonegovbr.brfields.fields import Estados
from plonegovbr.brfields.fields.estados import IEstados
from zope.schema.interfaces import ConstraintNotSatisfied
from zope.schema.interfaces import IChoice
from zope.schema.interfaces import IFromUnicode

import pytest


class TestEstadosField:
    @pytest.fixture(autouse=True)
    def _setup(self, portal) -> None:
        self.portal = portal
        self.field = Estados(title="Estado").bind(portal)

    def test_provides_interfaces(self):
        """The field is a Choice that can be set from unicode."""
        assert IEstados.providedBy(self.field)
        assert IChoice.providedBy(self.field)
        assert IFromUnicode.providedBy(self.field)

    def test_vocabulary_name(self):
        """The field always uses the states vocabulary."""
        assert self.field.vocabularyName == "plonegovbr.vocabulary.estados"

    def test_vocabulary_name_cannot_be_overridden(self):
        """A vocabulary passed to the field is ignored."""
        field = Estados(title="Estado", vocabulary="plone.app.vocabularies.Keywords")
        assert field.vocabularyName == "plonegovbr.vocabulary.estados"

    @pytest.mark.parametrize("value", ["SP", "DF", "AC", "TO"])
    def test_valid(self, value: str):
        """A state abbreviation is valid."""
        assert self.field.validate(value) is None

    @pytest.mark.parametrize("value", ["XX", "sp", "São Paulo"])
    def test_invalid(self, value: str):
        """A value outside the vocabulary is invalid."""
        with pytest.raises(ConstraintNotSatisfied):
            self.field.validate(value)

    @pytest.mark.parametrize("value", ["", None])
    def test_empty(self, value):
        """An empty value skips the vocabulary check."""
        field = Estados(title="Estado", required=False).bind(self.portal)
        assert field.validate(value) is None

    def test_from_unicode(self):
        """fromUnicode returns the token as value."""
        assert self.field.fromUnicode("RJ") == "RJ"
