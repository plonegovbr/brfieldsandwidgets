import { messages } from '../helpers/MessageLabels';
import { validaCEP } from '../helpers/validadores';

export function isValidCEP({ value, formatMessage }) {
  if (value && value.length !== 8) {
    return formatMessage(messages.cepLen);
  } else if (value && !validaCEP(value)) {
    return formatMessage(messages.cepInvalid);
  }
}
