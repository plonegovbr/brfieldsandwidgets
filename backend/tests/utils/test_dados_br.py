from plonegovbr.brfields.utils import dados_br

import pytest


@pytest.mark.parametrize(
    "value,expected",
    [
        ["999.999.999-99", False],
        ["99999999999", False],
        ["377.313.354-53", True],
        ["37731335453", True],
    ],
)
def test_valida_cpf(value: str, expected: bool):
    func = dados_br.valida_cpf
    result = func(value)
    assert result is expected


@pytest.mark.parametrize(
    "value,expected",
    [
        ["00000000000191", True],
        ["00.000.000/0001-91", True],
        ["11222333000181", True],
        ["11222333000180", False],
        ["00000000000000", False],
        ["1122233300018", False],
    ],
)
def test_valida_cnpj(value: str, expected: bool):
    func = dados_br.valida_cnpj
    result = func(value)
    assert result is expected


@pytest.mark.parametrize(
    "value,expected",
    [
        ["377.313.354-53", "***.313.354-**"],
        ["37731335453", "***.313.354-**"],
    ],
)
def test_mascara_cpf(value: str, expected: str):
    func = dados_br.mascara_cpf
    result = func(value)
    assert result == expected


@pytest.mark.parametrize(
    "value,expected",
    [
        ["11942893564", True],
        ["1139641234", True],
        ["81994340171", True],
        ["03001234", False],
        ["8133011285", True],
    ],
)
def test_valida_telefone(value: str, expected: bool):
    func = dados_br.valida_telefone
    result = func(value)
    assert result is expected


@pytest.mark.parametrize(
    "value,expected",
    [
        ["01332010", True],
        ["01332-010", True],
        ["99999-999", True],
        ["12345", False],
    ],
)
def test_valida_cep(value: str, expected: bool):
    func = dados_br.valida_cep
    result = func(value)
    assert result is expected
