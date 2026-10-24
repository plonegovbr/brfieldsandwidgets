from . import DEMO_PROFILE
from . import PAYLOAD
from . import PORTAL_TYPE
from plone import api
from plone.dexterity.fti import DexterityFTI
from plonegovbr.brfields.content.demo import DemoContent
from plonegovbr.brfields.content.demo import IDemoContent
from plonegovbr.brfields.fields.cep import ICEP
from plonegovbr.brfields.fields.cnpj import ICNPJ
from plonegovbr.brfields.fields.cpf import ICPF
from plonegovbr.brfields.fields.estados import IEstados
from plonegovbr.brfields.fields.fone import ITelefone
from zope.schema import getFields

import pytest


@pytest.mark.portal(profiles=[DEMO_PROFILE])
class TestDemoProfile:
    @pytest.fixture(autouse=True)
    def _setup(self, portal) -> None:
        self.portal = portal

    def test_profile_version(self, profile_last_version):
        """The demo profile is installed."""
        assert profile_last_version(DEMO_PROFILE) == "1000"

    def test_example_content(self):
        """The example content is imported."""
        content = self.portal["exemplo"]
        assert isinstance(content, DemoContent)
        assert content.cnpj == "00000000000191"
        assert content.estado == "SP"
        assert api.content.get_state(content) == "published"

    def test_site_title(self):
        """The site root data is imported with the example content."""
        assert self.portal.title == "Exemplo de campos brasileiros"

    def test_displayed_types(self):
        """The demo type is listed in the navigation."""
        displayed = api.portal.get_registry_record("plone.displayed_types")
        assert PORTAL_TYPE in displayed


@pytest.mark.portal(profiles=[DEMO_PROFILE])
class TestDemoContentFTI:
    @pytest.fixture(autouse=True)
    def _setup(self, portal, get_fti) -> None:
        self.portal = portal
        self.fti: DexterityFTI = get_fti(PORTAL_TYPE)

    @pytest.mark.parametrize(
        "attr,expected",
        [
            ("title", "DemoContent"),
            ("klass", "plonegovbr.brfields.content.demo.DemoContent"),
            ("schema", "plonegovbr.brfields.content.demo.IDemoContent"),
            ("global_allow", True),
            ("allow_discussion", False),
            ("add_permission", "cmf.AddPortalContent"),
        ],
    )
    def test_fti(self, attr: str, expected):
        """Test FTI values."""
        assert isinstance(self.fti, DexterityFTI)
        assert getattr(self.fti, attr) == expected

    def test_behaviors_count(self):
        assert len(self.fti.behaviors) == 3

    @pytest.mark.parametrize(
        "idx,behavior",
        list(
            enumerate((
                "plone.namefromtitle",
                "plone.shortname",
                "plone.excludefromnavigation",
            ))
        ),
    )
    def test_behaviors(self, idx: int, behavior: str):
        """Test behaviors are present and in correct order."""
        assert self.fti.behaviors[idx] == behavior


class TestDemoContentSchema:
    @pytest.mark.parametrize(
        "name,iface",
        [
            ("cnpj", ICNPJ),
            ("cpf", ICPF),
            ("estado", IEstados),
            ("cep", ICEP),
            ("telefone", ITelefone),
            ("fax", ITelefone),
        ],
    )
    def test_field(self, name: str, iface):
        """Each Brazilian field of the schema uses its field class."""
        field = getFields(IDemoContent)[name]
        assert iface.providedBy(field)

    def test_fieldsets(self):
        """Address and contact fields are grouped in fieldsets."""
        from plone.supermodel.interfaces import FIELDSETS_KEY

        fieldsets = {
            fs.__name__: fs.fields
            for fs in IDemoContent.queryTaggedValue(FIELDSETS_KEY, [])
        }
        assert fieldsets == {
            "endereco": ["estado", "cep"],
            "contato": ["telefone", "fax"],
        }


@pytest.mark.portal(profiles=[DEMO_PROFILE], content=[PAYLOAD])
class TestDemoContentCreation:
    @pytest.fixture(autouse=True)
    def _setup(self, portal) -> None:
        self.content = portal[PAYLOAD["id"]]

    def test_type(self):
        assert self.content.portal_type == PORTAL_TYPE
        assert IDemoContent.providedBy(self.content)

    @pytest.mark.parametrize(
        "name", ["cnpj", "cpf", "estado", "cep", "telefone", "fax"]
    )
    def test_values(self, name: str):
        """Values are stored as given."""
        assert getattr(self.content, name) == PAYLOAD[name]
