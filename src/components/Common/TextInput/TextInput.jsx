/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = (props) => {
  const {
    placeholder, size, type, disabled, onChange,
    onBlur, onKeyPress,
  } = props;

  return (
    <input
      className="REB-input"
      placeholder={placeholder}
      size={size}
      required
      disabled={disabled}
      type={type}
      onKeyPress={onKeyPress}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

TextInput.defaultProps = {
  disabled: false,
  onBlur: () => null,
  onChange: () => null,
  onKeyPress: () => null,
  placeholder: '',
  type: 'text',
  size: null,
};

TextInput.propTypes = {
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['color', 'date',
    'datetime-local', 'email', 'hidden', 'month', 'number',
    'password', 'search', 'tel', 'text', 'time', 'url', 'week',
  ]),
  size: PropTypes.number,
};

export default TextInput;
