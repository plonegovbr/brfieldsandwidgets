/**
 * TelefoneWidget component.
 * @module components/TelefoneWidget/TelefoneWidget
 */
import React, { useState, useRef } from 'react';
import FormFieldWrapper from '@plone/volto/components/manage/Widgets/FormFieldWrapper';
import PropTypes from 'prop-types';
import { applyMaskTelefone, cleanUpValue } from '../../helpers/format';
import { Input } from 'semantic-ui-react';

/** TelefoneWidget, a widget for cpf value
 */
const TelefoneWidget = (props) => {
  const {
    id,
    value,
    onChange,
    onBlur,
    onClick,
    minLength,
    maxLength,
    placeholder,
    isDisabled,
  } = props;
  const inputId = `field-${id}`;
  const ref = useRef();

  const [localValue, setLocalValue] = useState(value);
  const [maskedValue, setMaskedValue] = useState(applyMaskTelefone(localValue));

  const processValue = (rawValue) => {
    const value = cleanUpValue(rawValue);
    setMaskedValue(applyMaskTelefone(value));
    setLocalValue(value);
    return value;
  };

  const handleChange = ({ target }) => {
    const value = processValue(target.value);
    onChange(id, value === '' ? undefined : value);
  };

  const handleBlur = ({ target }) => {
    const value = processValue(target.value);
    onBlur(id, value === '' ? undefined : value);
  };

  return (
    <FormFieldWrapper {...props} className="cpf">
      <Input
        id={inputId}
        name={id}
        type="text"
        value={maskedValue || ''}
        disabled={isDisabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onClick={() => onClick()}
        ref={ref}
        minLength={minLength || null}
        maxLength={maxLength || null}
      />
    </FormFieldWrapper>
  );
};

/**
 * Property types
 * @property {Object} propTypes Property types.
 * @static
 */
TelefoneWidget.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.string),
  focus: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
TelefoneWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  focus: false,
  onChange: () => {},
  onBlur: () => {},
  onClick: () => {},
  minLength: 14,
  maxLength: 14,
};

const TelefoneWidgetDisplay = (props) => {
  const { value, className } = props;
  return (
    <span className={`telefone ${className}`}>{applyMaskTelefone(value)}</span>
  );
};

export { TelefoneWidget, TelefoneWidgetDisplay };
