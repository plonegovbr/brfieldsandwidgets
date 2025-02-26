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

const getRemaining = (value) => (value % 11 < 2 ? 0 : 11 - (value % 11));

const generateCheckSums = (numbers, validators) => {
  const initialCheckSums = [0, 0];

  return validators.reduce(
    ([checkerA, checkerB], validator, index) => [
      index === 0 ? 0 : checkerA + numbers[index - 1] * validator,
      checkerB + numbers[index] * validator,
    ],
    initialCheckSums,
  );
};

const isRepeatedArray = (items) => items.every((item) => items[0] === item);

export const validaCPF = (value) => {
  if (CPF_INVALIDOS.indexOf(value) > -1) return false;
  value = value.replace(/[^\d]+/g, '');
  if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
    return false;
  }
  const values = value.split('').map((el) => +el);
  const rest = (count) =>
    ((values
      .slice(0, count - 12)
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) %
      11) %
    10;
  return rest(10) === values[9] && rest(11) === values[10];
};

export const validaCNPJ = (value) => {
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

export const validaTelefone = (value) => {
  const numbers = mapToNumbers(value).join('');
  if (!/^\d{10,11}$/.test(numbers)) return false;
  return /^[1-9]{2}([2-8]|9[0-9])[0-9]{3}[0-9]{4}$/.test(numbers);
};

export const validaCEP = (value) => {
  const numbers = mapToNumbers(value).join('');
  if (!/^\d{8}$/.test(numbers)) return false;
  return /^[0-9]{5}-?[0-9]{3}$/.test(numbers);
};
