import { defineMessages } from 'react-intl';

export const messages = defineMessages({
  cepLen: {
    id: 'O CEP deve ser no formato 99999-999',
    defaultMessage: 'O CEP deve ser no formato 99999-999',
  },
  cepInvalid: {
    id: 'O CEP informado não é válido',
    defaultMessage: 'O CEP informado não é válido',
  },
  cpfLen: {
    id: 'O CPF deve ser no formato 999.999.999-99',
    defaultMessage: 'O CPF deve ser no formato 999.999.999-99',
  },
  cpfInvalid: {
    id: 'O CPF informado não é válido',
    defaultMessage: 'O CPF informado não é válido',
  },
  cnpjLen: {
    id: 'O CNPJ deve ser no formato 99.999.999/9999-99',
    defaultMessage: 'O CNPJ deve ser no formato 99.999.999/9999-99',
  },
  cnpjInvalid: {
    id: 'O CNPJ informado não é válido',
    defaultMessage: 'O CNPJ informado não é válido',
  },
  telefoneLen: {
    id: 'O telefone deve ser no formato (99) 9999-999 ou (99) 99999-999',
    defaultMessage:
      'O telefone deve ser no formato (99) 9999-999 ou (99) 99999-999',
  },
  telefoneInvalid: {
    id: 'O telefone informado não é válido',
    defaultMessage: 'O telefone informado não é válido',
  },
});
