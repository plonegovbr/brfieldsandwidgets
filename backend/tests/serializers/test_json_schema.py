from plone.restapi.types.interfaces import IJsonSchemaProvider
from plonegovbr.brfields import fields
from plonegovbr.brfields.serializers import fields as providers
from zope.component import getMultiAdapter

import pytest


class TestJsonSchemaProviders:
    @pytest.fixture(autouse=True)
    def _setup(self, portal) -> None:
        self.portal = portal
        self.request = portal.REQUEST

    def _schema(self, field) -> tuple[IJsonSchemaProvider, dict]:
        provider = getMultiAdapter(
            (field, self.portal, self.request), IJsonSchemaProvider
        )
        return provider, provider.get_schema()

    @pytest.mark.parametrize(
        "klass,provider_class,widget,factory",
        [
            (fields.CEP, providers.CEPJsonSchemaProvider, "cep", "CEP"),
            (fields.CNPJ, providers.CNPJJsonSchemaProvider, "cnpj", "CNPJ"),
            (fields.CPF, providers.CPFJsonSchemaProvider, "cpf", "CPF"),
            (
                fields.Telefone,
                providers.TelefoneJsonSchemaProvider,
                "telefone",
                "Telefone",
            ),
        ],
    )
    def test_schema(self, klass, provider_class, widget: str, factory: str):
        """Each field is described with its own widget and factory."""
        field = klass(title="Field", description="Help text")
        provider, schema = self._schema(field)
        assert isinstance(provider, provider_class)
        assert schema["type"] == "string"
        assert schema["widget"] == widget
        assert schema["factory"] == factory
        assert schema["title"] == "Field"
        assert schema["description"] == "Help text"

    def test_estados_schema(self):
        """The states field is a Choice, served with its vocabulary."""
        field = fields.Estados(title="Estado").bind(self.portal)
        _, schema = self._schema(field)
        assert schema["type"] == "string"
        assert schema["vocabulary"]["@id"].endswith(
            "@vocabularies/plonegovbr.vocabulary.estados"
        )
