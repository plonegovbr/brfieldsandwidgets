/**
 * MaskedInputWidget component.
 *
 * The text input every widget of this package is built on: it shows the value
 * formatted while the editor types, and hands Volto only its digits.
 * @module components/MaskedInputWidget/MaskedInputWidget
 */
import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import FormFieldWrapper from '@plone/volto/components/manage/Widgets/FormFieldWrapper';
import { cleanUpValue, type MaybeString } from '../../helpers/format';

/** The props Volto passes to a widget, as this package's widgets read them. */
export interface WidgetProps {
  /** Field id. */
  id: string;
  /** Field title. */
  title: string;
  /** Field description. */
  description?: string | null;
  /** Whether the field is required. */
  required?: boolean;
  /** Validation errors to show. */
  error?: string[];
  /** The field's value: its digits only. */
  value?: MaybeString;
  /** Called with the field id and the new value as the editor types. */
  onChange?: (id: string, value: string | undefined) => void;
  /** Called with the field id and the value when the input loses focus. */
  onBlur?: (id: string, value: string | undefined) => void;
  /** Called when the input is clicked. */
  onClick?: () => void;
  /** Minimum length of the formatted value. */
  minLength?: number;
  /** Maximum length of the formatted value. */
  maxLength?: number;
  /** Placeholder of the input. */
  placeholder?: string;
  /** Whether the input is disabled. */
  isDisabled?: boolean;
  /** Any other prop is passed on to `FormFieldWrapper`. */
  [key: string]: unknown;
}

export interface MaskedInputWidgetProps extends WidgetProps {
  /** Format the digits of the value for display. */
  format: (value: MaybeString) => string;
  /** Class name of the field wrapper. */
  className: string;
}

/** The props of a display (view) widget. */
export interface WidgetDisplayProps {
  /** The field's value. */
  value?: MaybeString;
  /** Extra class names. */
  className?: string;
}

const noop = () => {};

/**
 * A text input that formats its value while the editor types.
 *
 * @param props The widget props, with the formatting function to use.
 * @returns The widget.
 */
const MaskedInputWidget = (props: MaskedInputWidgetProps) => {
  const {
    id,
    value,
    format,
    className,
    onChange = noop,
    onBlur = noop,
    onClick = noop,
    minLength,
    maxLength,
    placeholder,
    isDisabled,
  } = props;
  const inputId = `field-${id}`;

  const [maskedValue, setMaskedValue] = useState(format(value));

  const processValue = (rawValue: string): string | undefined => {
    const digits = cleanUpValue(rawValue);
    setMaskedValue(format(digits));
    return digits === '' ? undefined : digits;
  };

  return (
    <FormFieldWrapper {...props} className={className}>
      <Input
        id={inputId}
        name={id}
        type="text"
        value={maskedValue || ''}
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={({ target }) => onChange(id, processValue(target.value))}
        onBlur={({ target }: React.FocusEvent<HTMLInputElement>) =>
          onBlur(id, processValue(target.value))
        }
        onClick={() => onClick()}
        minLength={minLength || undefined}
        maxLength={maxLength || undefined}
      />
    </FormFieldWrapper>
  );
};

export default MaskedInputWidget;
