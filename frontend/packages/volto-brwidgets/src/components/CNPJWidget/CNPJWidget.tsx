/**
 * CNPJWidget component.
 * @module components/CNPJWidget/CNPJWidget
 */
import React from 'react';
import MaskedInputWidget, {
  type WidgetDisplayProps,
  type WidgetProps,
} from '../MaskedInputWidget/MaskedInputWidget';
import { applyMask, type MaybeString } from '../../helpers/format';

const mask = '99.999.999/9999-99';

/**
 * Format a CNPJ for display.
 *
 * @param value The digits of the CNPJ.
 * @returns The formatted CNPJ.
 */
export const formatCNPJ = (value: MaybeString): string =>
  applyMask(value, mask);

/** CNPJWidget, a widget for a CNPJ value. */
const CNPJWidget = (props: WidgetProps) => (
  <MaskedInputWidget
    maxLength={mask.length}
    {...props}
    format={formatCNPJ}
    className="cnpj"
  />
);

/** CNPJWidgetDisplay, the view widget for a CNPJ value. */
const CNPJWidgetDisplay = ({ value, className }: WidgetDisplayProps) => (
  <span className={`cnpj ${className ?? ''}`.trim()}>{formatCNPJ(value)}</span>
);

export { CNPJWidget, CNPJWidgetDisplay };
