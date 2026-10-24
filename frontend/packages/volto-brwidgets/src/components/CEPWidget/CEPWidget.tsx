/**
 * CEPWidget component.
 * @module components/CEPWidget/CEPWidget
 */
import React from 'react';
import MaskedInputWidget, {
  type WidgetDisplayProps,
  type WidgetProps,
} from '../MaskedInputWidget/MaskedInputWidget';
import { applyMask, type MaybeString } from '../../helpers/format';

const mask = '99999-999';

/**
 * Format a CEP for display.
 *
 * @param value The digits of the CEP.
 * @returns The formatted CEP.
 */
export const formatCEP = (value: MaybeString): string => applyMask(value, mask);

/** CEPWidget, a widget for a CEP value. */
const CEPWidget = (props: WidgetProps) => (
  <MaskedInputWidget
    maxLength={mask.length}
    {...props}
    format={formatCEP}
    className="cep"
  />
);

/** CEPWidgetDisplay, the view widget for a CEP value. */
const CEPWidgetDisplay = ({ value, className }: WidgetDisplayProps) => (
  <span className={`cep ${className ?? ''}`.trim()}>{formatCEP(value)}</span>
);

export { CEPWidget, CEPWidgetDisplay };
