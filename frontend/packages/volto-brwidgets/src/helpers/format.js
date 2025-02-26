const mapToNumeric = (value) => value.replace(/\D/g, '');

export const mapToNumbers = (value) =>
  value !== null && value !== undefined
    ? mapToNumeric(value).split('').map(Number)
    : [];

export const applyMask = (value, mask) => {
  value = mapToNumbers(value).join('');
  let result = '';

  let inc = 0;
  if (value) {
    Array.from(value).forEach((letter, index) => {
      if (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc];
        inc++;
      }
      result += letter;
    });
  }
  return result;
};

export const cleanUpValue = (value) => {
  return value !== undefined || value !== null
    ? value.replace(/[^0-9]/g, '')
    : '';
};

export const applyMaskTelefone = (value) => {
  value = mapToNumbers(value).join('');
  let result = '';
  if (value) {
    const mask = value.length === 11 ? '(99)99999-9999' : '(99)9999-9999';
    result = applyMask(value, mask);
  }
  return result;
};
