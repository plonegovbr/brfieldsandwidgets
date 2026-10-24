import { describe, expect, it } from 'vitest';

import { testIntl } from '../testing';
import { isValidCEP } from './cep';
import { isValidCNPJ } from './cnpj';
import { isValidCPF } from './cpf';
import { isValidTelefone } from './telefone';

/**
 * Run a validator as Volto does.
 *
 * @param validator The validator.
 * @param value The value to validate.
 * @returns What the validator returns.
 */
function validate(validator: (args: any) => string | undefined, value: any) {
  return validator({
    value,
    field: {},
    formData: {},
    formatMessage: testIntl.formatMessage,
  });
}

describe('isValidCEP', () => {
  it.each([['01310100'], ['70609370']])('accepts %s', (value) => {
    expect(validate(isValidCEP, value)).toBeUndefined();
  });

  it.each([['0131010'], ['013101000']])(
    'refuses %s for its length',
    (value) => {
      expect(validate(isValidCEP, value)).toBe(
        'O CEP deve ser no formato 99999-999',
      );
    },
  );

  it.each([[undefined], [null], ['']])('accepts no value: %j', (value) => {
    expect(validate(isValidCEP, value)).toBeUndefined();
  });
});

describe('isValidCNPJ', () => {
  it.each([['11222333000181'], ['00000000000191']])('accepts %s', (value) => {
    expect(validate(isValidCNPJ, value)).toBeUndefined();
  });

  it('refuses a value with the wrong length', () => {
    expect(validate(isValidCNPJ, '1122233300018')).toBe(
      'O CNPJ deve ser no formato 99.999.999/9999-99',
    );
  });

  it.each([['11222333000180'], ['00000000000000']])(
    'refuses %s for its check digits',
    (value) => {
      expect(validate(isValidCNPJ, value)).toBe(
        'O CNPJ informado não é válido',
      );
    },
  );

  it.each([[undefined], [null], ['']])('accepts no value: %j', (value) => {
    expect(validate(isValidCNPJ, value)).toBeUndefined();
  });
});

describe('isValidCPF', () => {
  it.each([['37731335453'], ['00829102868']])('accepts %s', (value) => {
    expect(validate(isValidCPF, value)).toBeUndefined();
  });

  it.each([['3773133545'], ['377313354530']])(
    'refuses %s for its length',
    (value) => {
      expect(validate(isValidCPF, value)).toBe(
        'O CPF deve ser no formato 999.999.999-99',
      );
    },
  );

  it.each([['37731335450'], ['99999999999']])(
    'refuses %s for its check digits',
    (value) => {
      expect(validate(isValidCPF, value)).toBe('O CPF informado não é válido');
    },
  );

  it.each([[undefined], [null], ['']])('accepts no value: %j', (value) => {
    expect(validate(isValidCPF, value)).toBeUndefined();
  });
});

describe('isValidTelefone', () => {
  it.each([['1133334444'], ['11987654321']])('accepts %s', (value) => {
    expect(validate(isValidTelefone, value)).toBeUndefined();
  });

  it('refuses a number that is too short', () => {
    expect(validate(isValidTelefone, '113333444')).toBe(
      'O telefone deve ser no formato (99) 9999-999 ou (99) 99999-999',
    );
  });

  it('refuses a number that is too long', () => {
    expect(validate(isValidTelefone, '119876543210')).toBe(
      'O telefone informado não é válido',
    );
  });

  it.each([['1103334444'], ['0133334444']])(
    'refuses %s for its format',
    (value) => {
      expect(validate(isValidTelefone, value)).toBe(
        'O telefone informado não é válido',
      );
    },
  );

  it.each([[undefined], [null], ['']])('accepts no value: %j', (value) => {
    expect(validate(isValidTelefone, value)).toBeUndefined();
  });
});
