/**
 * CPFWidget component.
 * @module components/CPFWidget/CPFWidget
 */
import React from 'react';
import MaskedInputWidget, {
  type WidgetDisplayProps,
  type WidgetProps,
} from '../MaskedInputWidget/MaskedInputWidget';
import { applyMask, type MaybeString } from '../../helpers/format';

const mask = '999.999.999-999';

/**
 * Format a CPF for display.
 *
 * @param value The digits of the CPF.
 * @returns The formatted CPF.
 */
export const formatCPF = (value: MaybeString): string => applyMask(value, mask);

/** CPFWidget, a widget for a CPF value. */
const CPFWidget = (props: WidgetProps) => (
  <MaskedInputWidget
    maxLength={14}
    {...props}
    format={formatCPF}
    className="cpf"
  />
);

/**
 * CPFWidgetDisplay, the view widget for a CPF value.
 *
 * A value the backend already masked for privacy, such as `***.313.354-**`,
 * is shown as it is.
 */
const CPFWidgetDisplay = ({ value, className }: WidgetDisplayProps) => {
  const isMasked = /\*/.test(value ?? '');
  return (
    <span className={`cpf ${className ?? ''}`.trim()}>
      {isMasked ? value : formatCPF(value)}
    </span>
  );
};

export { CPFWidget, CPFWidgetDisplay };
