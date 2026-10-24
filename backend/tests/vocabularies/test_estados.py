from . import ESTADOS_VOCABULARY
from zope.schema.vocabulary import SimpleTerm
from zope.schema.vocabulary import SimpleVocabulary

import pytest


class TestVocabEstados:
    name: str = ESTADOS_VOCABULARY
    vocab_type = SimpleVocabulary

    @pytest.fixture(autouse=True)
    def _setup(self, portal, get_vocabulary):
        self.portal = portal
        self.vocab = get_vocabulary(self.name, self.portal)

    def test_vocabulary_type(self):
        assert isinstance(self.vocab, self.vocab_type)

    def test_vocabulary_size(self):
        """The 26 states and the Federal District."""
        assert len(self.vocab) == 27

    @pytest.mark.parametrize(
        "token,title",
        [
            ("AC", "Acre"),
            ("AL", "Alagoas"),
            ("AP", "Amapá"),
            ("AM", "Amazonas"),
            ("BA", "Bahia"),
            ("CE", "Ceará"),
            ("DF", "Distrito Federal"),
            ("ES", "Espírito Santo"),
            ("GO", "Goiás"),
            ("MA", "Maranhão"),
            ("MT", "Mato Grosso"),
            ("MS", "Mato Grosso do Sul"),
            ("MG", "Minas Gerais"),
            ("PA", "Pará"),
            ("PB", "Paraíba"),
            ("PR", "Paraná"),
            ("PE", "Pernambuco"),
            ("PI", "Piauí"),
            ("RJ", "Rio de Janeiro"),
            ("RN", "Rio Grande do Norte"),
            ("RS", "Rio Grande do Sul"),
            ("RO", "Rondônia"),
            ("RR", "Roraima"),
            ("SC", "Santa Catarina"),
            ("SP", "São Paulo"),
            ("SE", "Sergipe"),
            ("TO", "Tocantins"),
        ],
    )
    def test_vocab_terms(self, token: str, title: str):
        term = self.vocab.getTermByToken(token)
        assert isinstance(term, SimpleTerm)
        assert term.title == title
        assert term.token == token
        assert term.value == token
