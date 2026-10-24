import type { ValidatorUtilityArgs } from '@plone/types';
import { isValidCEP as validaCEP } from '@brazilian-utils/brazilian-utils';
import { messages } from '../helpers/MessageLabels';

/**
 * Volto validator for the CEP widget.
 *
 * @param options What Volto passes to a validator.
 * @returns The error message, or nothing when the value is valid.
 */
export function isValidCEP({
  value,
  formatMessage,
}: ValidatorUtilityArgs): string | undefined {
  if (value && value.length !== 8) {
    return formatMessage(messages.cepLen);
  } else if (value && !validaCEP(value)) {
    return formatMessage(messages.cepInvalid);
  }
}
