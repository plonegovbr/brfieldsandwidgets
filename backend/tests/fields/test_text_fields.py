from . import INVALID_CEP
from . import INVALID_CNPJ
from . import INVALID_CPF
from . import INVALID_TELEFONE
from . import VALID_CEP
from . import VALID_CNPJ
from . import VALID_CPF
from . import VALID_TELEFONE
from plonegovbr.brfields import fields
from plonegovbr.brfields.fields import cep
from plonegovbr.brfields.fields import cnpj
from plonegovbr.brfields.fields import cpf
from plonegovbr.brfields.fields import fone
from zope.schema.interfaces import IFromUnicode
from zope.schema.interfaces import INativeStringLine

import pytest


FIELDS = [
    (fields.CEP, cep.ICEP, cep.InvalidCEP, VALID_CEP, INVALID_CEP),
    (fields.CNPJ, cnpj.ICNPJ, cnpj.InvalidCNPJ, VALID_CNPJ, INVALID_CNPJ),
    (fields.CPF, cpf.ICPF, cpf.InvalidCPF, VALID_CPF, INVALID_CPF),
    (
        fields.Telefone,
        fone.ITelefone,
        fone.InvalidTelefone,
        VALID_TELEFONE,
        INVALID_TELEFONE,
    ),
]


def _cases(position: int) -> list[tuple]:
    """Flatten FIELDS into (field class, exception, value) cases."""
    return [
        (klass, error, value)
        for klass, _, error, *values in FIELDS
        for value in values[position]
    ]


class TestFieldInterfaces:
    @pytest.mark.parametrize(
        "klass,iface",
        [(klass, iface) for klass, iface, *_ in FIELDS],
    )
    def test_provides_field_interface(self, klass, iface):
        """Each field provides its own marker interface."""
        assert iface.providedBy(klass(title="Field"))

    @pytest.mark.parametrize(
        "klass,iface",
        [(klass, iface) for klass, iface, *_ in FIELDS],
    )
    def test_extends_native_string_line(self, klass, iface):
        """Each field interface extends INativeStringLine."""
        assert iface.extends(INativeStringLine)

    @pytest.mark.parametrize("klass", [klass for klass, *_ in FIELDS])
    def test_provides_from_unicode(self, klass):
        """Each field can be set from a unicode value."""
        assert IFromUnicode.providedBy(klass(title="Field"))


class TestFieldValidation:
    @pytest.mark.parametrize("klass,error,value", _cases(0))
    def test_valid(self, klass, error, value: str):
        """Valid values pass validation."""
        field = klass(title="Field")
        assert field.validate(value) is None

    @pytest.mark.parametrize("klass,error,value", _cases(1))
    def test_invalid(self, klass, error, value: str):
        """Invalid values raise the field's validation error."""
        field = klass(title="Field")
        with pytest.raises(error):
            field.validate(value)

    @pytest.mark.parametrize("klass", [klass for klass, *_ in FIELDS])
    def test_missing_value_not_required(self, klass):
        """A field that is not required accepts no value."""
        field = klass(title="Field", required=False)
        assert field.validate(None) is None

    @pytest.mark.parametrize("klass,error,value", _cases(1))
    def test_error_value(self, klass, error, value: str):
        """The validation error carries the rejected value."""
        field = klass(title="Field")
        with pytest.raises(error) as exc:
            field.validate(value)
        assert exc.value.args == (value,)


class TestFieldFromUnicode:
    @pytest.mark.parametrize("klass,error,value", _cases(0))
    def test_strips_whitespace(self, klass, error, value: str):
        """fromUnicode strips surrounding whitespace before validating."""
        field = klass(title="Field")
        assert field.fromUnicode(f"  {value}\n") == value

    @pytest.mark.parametrize("klass,error,value", _cases(1))
    def test_invalid(self, klass, error, value: str):
        """fromUnicode rejects invalid values."""
        field = klass(title="Field")
        with pytest.raises(error):
            field.fromUnicode(value)


class TestCEPEmptyValue:
    def test_empty_string(self):
        """CEP accepts an empty string, the default of the demo content type."""
        field = fields.CEP(title="CEP", required=False)
        assert field.validate("") is None
