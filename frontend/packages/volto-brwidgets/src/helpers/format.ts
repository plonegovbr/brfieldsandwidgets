/**
 * Formatting helpers shared by the widgets.
 * @module helpers/format
 */

/** A value as a widget receives it: a string, or nothing. */
export type MaybeString = string | null | undefined;

const mapToNumeric = (value: string): string => value.replace(/\D/g, '');

/**
 * The digits of a value, as numbers.
 *
 * @param value The value to read.
 * @returns Every digit of the value, in order; none for an empty value.
 */
export const mapToNumbers = (value: MaybeString): number[] =>
  value !== null && value !== undefined
    ? mapToNumeric(value).split('').map(Number)
    : [];

/**
 * Format the digits of a value with a mask.
 *
 * Every `9` of the mask stands for a digit, and any other character is copied
 * as it is, as long as there are digits left to place after it. Digits beyond
 * what the mask holds are dropped.
 *
 * @param value The value to format. Characters other than digits are dropped.
 * @param mask The mask, such as `99999-999`.
 * @returns The formatted value.
 */
export const applyMask = (value: MaybeString, mask: string): string => {
  const digits = mapToNumbers(value);
  let result = '';
  let position = 0;

  for (const digit of digits) {
    while (position < mask.length && !/[0-9]/.test(mask[position])) {
      result += mask[position];
      position++;
    }
    if (position >= mask.length) break;
    result += digit;
    position++;
  }
  return result;
};

/**
 * Drop every character of a value that is not a digit.
 *
 * @param value The value to clean up.
 * @returns The digits of the value, as a string.
 */
export const cleanUpValue = (value: MaybeString): string =>
  value !== undefined && value !== null ? value.replace(/[^0-9]/g, '') : '';

/**
 * Format a phone number, landline or mobile, with its area code.
 *
 * @param value The phone number.
 * @returns The formatted phone number.
 */
export const applyMaskTelefone = (value: MaybeString): string => {
  const digits = mapToNumbers(value).join('');
  if (!digits) return '';
  const mask = digits.length === 11 ? '(99)99999-9999' : '(99)9999-9999';
  return applyMask(digits, mask);
};
