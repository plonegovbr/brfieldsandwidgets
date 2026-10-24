/**
 * TelefoneWidget component.
 * @module components/TelefoneWidget/TelefoneWidget
 */
import React from 'react';
import MaskedInputWidget, {
  type WidgetDisplayProps,
  type WidgetProps,
} from '../MaskedInputWidget/MaskedInputWidget';
import { applyMaskTelefone } from '../../helpers/format';

/** TelefoneWidget, a widget for a phone number, landline or mobile. */
const TelefoneWidget = (props: WidgetProps) => (
  <MaskedInputWidget
    maxLength={14}
    {...props}
    format={applyMaskTelefone}
    className="telefone"
  />
);

/** TelefoneWidgetDisplay, the view widget for a phone number. */
const TelefoneWidgetDisplay = ({ value, className }: WidgetDisplayProps) => (
  <span className={`telefone ${className ?? ''}`.trim()}>
    {applyMaskTelefone(value)}
  </span>
);

export { TelefoneWidget, TelefoneWidgetDisplay };
