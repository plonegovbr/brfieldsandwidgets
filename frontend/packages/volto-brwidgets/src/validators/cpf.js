import { messages } from '../helpers/MessageLabels';
import { validaCPF } from '../helpers/validadores';

export function isValidCPF({ value, formatMessage }) {
  if (value && value.length !== 12) {
    return formatMessage(messages.cpfLen);
  } else if (value && !validaCPF(value)) {
    return formatMessage(messages.cfpInvalid);
  }
}
