import type { ValidatorUtilityArgs } from '@plone/types';
import { isValidCNPJ as validaCNPJ } from '@brazilian-utils/brazilian-utils';
import { messages } from '../helpers/MessageLabels';

/**
 * Volto validator for the CNPJ widget.
 *
 * @param options What Volto passes to a validator.
 * @returns The error message, or nothing when the value is valid.
 */
export function isValidCNPJ({
  value,
  formatMessage,
}: ValidatorUtilityArgs): string | undefined {
  if (value && value.length !== 14) {
    return formatMessage(messages.cnpjLen);
  } else if (value && !validaCNPJ(value)) {
    return formatMessage(messages.cnpjInvalid);
  }
}
