import { messages } from '../helpers/MessageLabels';
import { validaCNPJ } from '../helpers/validadores';

export function isValidCNPJ({ value, formatMessage }) {
  if (value && value.length !== 14) {
    return formatMessage(messages.cnpjLen);
  } else if (value && !validaCNPJ(value)) {
    return formatMessage(messages.cnpjInvalid);
  }
}
