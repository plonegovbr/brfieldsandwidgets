import type { ValidatorUtilityArgs } from '@plone/types';
import { messages } from '../helpers/MessageLabels';

/**
 * Volto validator for the phone number widget.
 *
 * @param options What Volto passes to a validator.
 * @returns The error message, or nothing when the value is valid.
 */
export function isValidTelefone({
  value,
  formatMessage,
}: ValidatorUtilityArgs): string | undefined {
  if (value && value.length < 10) {
    return formatMessage(messages.telefoneLen);
  } else if (value && value.length > 11) {
    return formatMessage(messages.telefoneInvalid);
  }
}
