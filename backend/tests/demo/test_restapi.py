from . import DEMO_PROFILE
from . import PORTAL_TYPE
from . import RESTAPI_PAYLOAD

import pytest


@pytest.mark.portal(profiles=[DEMO_PROFILE])
class TestTypesEndpoint:
    @pytest.fixture(autouse=True)
    def _setup(self, committed_portal, manager_request) -> None:
        response = manager_request.get(f"/@types/{PORTAL_TYPE}")
        assert response.status_code == 200
        self.schema = response.json()

    @pytest.mark.parametrize(
        "name,widget,factory",
        [
            ("cnpj", "cnpj", "CNPJ"),
            ("cpf", "cpf", "CPF"),
            ("cep", "cep", "CEP"),
            ("telefone", "telefone", "Telefone"),
            ("fax", "telefone", "Telefone"),
        ],
    )
    def test_widget(self, name: str, widget: str, factory: str):
        """Volto receives the widget registered by volto-brwidgets."""
        prop = self.schema["properties"][name]
        assert prop["widget"] == widget
        assert prop["factory"] == factory

    def test_estado_vocabulary(self):
        """The states field points to its vocabulary."""
        prop = self.schema["properties"]["estado"]
        assert prop["vocabulary"]["@id"].endswith(
            "@vocabularies/plonegovbr.vocabulary.estados"
        )

    @pytest.mark.parametrize(
        "fieldset,fields",
        [
            ("endereco", ["estado", "cep"]),
            ("contato", ["telefone", "fax"]),
        ],
    )
    def test_fieldsets(self, fieldset: str, fields: list[str]):
        fieldsets = {fs["id"]: fs["fields"] for fs in self.schema["fieldsets"]}
        assert fieldsets[fieldset] == fields


@pytest.mark.portal(profiles=[DEMO_PROFILE])
class TestCreateContent:
    @pytest.fixture(autouse=True)
    def _setup(self, committed_portal) -> None:
        self.portal = committed_portal

    def test_create_valid(self, manager_request):
        """Valid values are accepted."""
        response = manager_request.post("/", json=RESTAPI_PAYLOAD)
        assert response.status_code == 201
        data = response.json()
        for name in ("cnpj", "cpf", "cep", "telefone", "fax"):
            assert data[name] == RESTAPI_PAYLOAD[name]
        assert data["estado"] == {"title": "Distrito Federal", "token": "DF"}

    @pytest.mark.parametrize(
        "name,value",
        [
            ("cnpj", "11222333000180"),
            ("cpf", "37731335450"),
            ("cep", "1234"),
            ("telefone", "0133011285"),
            ("estado", "XX"),
        ],
    )
    def test_create_invalid(self, manager_request, name: str, value: str):
        """An invalid value is refused, naming the field."""
        payload = {**RESTAPI_PAYLOAD, name: value}
        response = manager_request.post("/", json=payload)
        assert response.status_code == 400
        errors = response.json()["message"]
        assert name in errors
