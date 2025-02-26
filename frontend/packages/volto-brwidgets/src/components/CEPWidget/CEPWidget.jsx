/**
 * CEPWidget component.
 * @module components/CEPWidget/CEPWidget
 */
import React, { useState, useRef } from 'react';
import FormFieldWrapper from '@plone/volto/components/manage/Widgets/FormFieldWrapper';
import PropTypes from 'prop-types';
import { applyMask, cleanUpValue } from '../../helpers/format';
import { Input } from 'semantic-ui-react';

const mask = '99999-999';

/** CEPWidget, a widget for cep value
 */
const CEPWidget = (props) => {
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
  const [maskedValue, setMaskedValue] = useState(applyMask(localValue, mask));

  const processValue = (rawValue) => {
    const value = cleanUpValue(rawValue);
    setMaskedValue(applyMask(value, mask));
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
CEPWidget.propTypes = {
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
CEPWidget.defaultProps = {
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

const CEPWidgetDisplay = (props) => {
  const { value, className } = props;
  return <span className={`cep ${className}`}>{applyMask(value, mask)}</span>;
};

export { CEPWidget, CEPWidgetDisplay };
