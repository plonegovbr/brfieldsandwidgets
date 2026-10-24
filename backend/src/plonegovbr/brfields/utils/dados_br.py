from brutils import is_valid_cep
from brutils import is_valid_cnpj
from brutils import is_valid_cpf
from brutils import is_valid_phone
from brutils import remove_symbols_cep
from brutils import remove_symbols_cnpj
from brutils import remove_symbols_cpf


def valida_cnpj(valor: str) -> bool:
    """Valida um número de CNPJ, com ou sem pontuação."""
    return is_valid_cnpj(remove_symbols_cnpj(valor))


def valida_cpf(valor: str) -> bool:
    """Valida um número de CPF, com ou sem pontuação."""
    return is_valid_cpf(remove_symbols_cpf(valor))


def mascara_cpf(valor: str) -> str:
    """Gera uma máscara de CPF para exibição no portal."""
    valor = "".join([c for c in valor if c.isdigit()])
    return f"***.{valor[3:6]}.{valor[6:9]}-**"


def valida_telefone(valor: str) -> bool:
    """Valida um telefone fixo ou celular, somente dígitos, com DDD."""
    return is_valid_phone(valor)


def valida_cep(valor: str) -> bool:
    """Valida um CEP, com ou sem hífen."""
    return is_valid_cep(remove_symbols_cep(valor))
