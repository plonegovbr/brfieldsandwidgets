/**
 * Validation helpers shared by the widget validators.
 * @module helpers/validadores
 */
import { mapToNumbers } from './format';

const CPF_INVALIDOS = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
];

const getRemaining = (value: number): number =>
  value % 11 < 2 ? 0 : 11 - (value % 11);

const generateCheckSums = (
  numbers: number[],
  validators: number[],
): [number, number] =>
  validators.reduce<[number, number]>(
    ([checkerA, checkerB], validator, index) => [
      index === 0 ? 0 : checkerA + numbers[index - 1] * validator,
      checkerB + numbers[index] * validator,
    ],
    [0, 0],
  );

const isRepeatedArray = (items: number[]): boolean =>
  items.every((item) => items[0] === item);

/**
 * Check the digits of a CPF.
 *
 * @param value The CPF, with or without its punctuation.
 * @returns Whether the CPF is valid.
 */
export const validaCPF = (value: string): boolean => {
  if (CPF_INVALIDOS.indexOf(value) > -1) return false;
  const digits = value.replace(/[^\d]+/g, '');
  if (digits.length !== 11 || !!digits.match(/(\d)\1{10}/)) {
    return false;
  }
  const values = digits.split('').map((el) => +el);
  const rest = (count: number) =>
    ((values
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;
  return rest(10) === values[9] && rest(11) === values[10];
};

/**
 * Check the digits of a CNPJ.
 *
 * @param value The CNPJ, either digits only or fully punctuated.
 * @returns Whether the CNPJ is valid.
 */
export const validaCNPJ = (value: string): boolean => {
  if (!/^(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/.test(value)) return false;
  const numbers = mapToNumbers(value);
  if (isRepeatedArray(numbers)) return false;
  const validators = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const checkers = generateCheckSums(numbers, validators);
  return (
    numbers[12] === getRemaining(checkers[0]) &&
    numbers[13] === getRemaining(checkers[1])
  );
};

/**
 * Check the format of a phone number with its area code.
 *
 * @param value The phone number, with or without its punctuation.
 * @returns Whether the phone number is valid.
 */
export const validaTelefone = (value: string): boolean => {
  const numbers = mapToNumbers(value).join('');
  if (!/^\d{10,11}$/.test(numbers)) return false;
  return /^[1-9]{2}([2-8]|9[0-9])[0-9]{3}[0-9]{4}$/.test(numbers);
};

/**
 * Check the format of a CEP.
 *
 * @param value The CEP, with or without its hyphen.
 * @returns Whether the CEP is valid.
 */
export const validaCEP = (value: string): boolean => {
  const numbers = mapToNumbers(value).join('');
  if (!/^\d{8}$/.test(numbers)) return false;
  return /^[0-9]{5}-?[0-9]{3}$/.test(numbers);
};
