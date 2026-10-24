import type { ValidatorUtilityArgs } from '@plone/types';
import { messages } from '../helpers/MessageLabels';
import { validaCPF } from '../helpers/validadores';

/**
 * Volto validator for the CPF widget.
 *
 * @param options What Volto passes to a validator.
 * @returns The error message, or nothing when the value is valid.
 */
export function isValidCPF({
  value,
  formatMessage,
}: ValidatorUtilityArgs): string | undefined {
  if (value && value.length !== 12) {
    return formatMessage(messages.cpfLen);
  } else if (value && !validaCPF(value)) {
    return formatMessage(messages.cpfInvalid);
  }
}
