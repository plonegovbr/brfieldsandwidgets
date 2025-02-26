import { messages } from '../helpers/MessageLabels';

export function isValidTelefone({ value, formatMessage }) {
  if (value && value.length < 10) {
    return formatMessage(messages.telefoneLen);
  } else if (value && value.length > 11) {
    return formatMessage(messages.telefoneInvalid);
  }
}
