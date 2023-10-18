import React, { ChangeEvent, FocusEvent, useState } from 'react';

import styles from './textInput.module.scss';

interface TextInputProps {
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  touched?: boolean;
  name: string;
  error?: string | null;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  onChange,
  value,
  placeholder = '',
  touched = false,
  error = null,
  onFocus,
  name,
  onBlur,
}) => {
  const [focused, setFocused] = useState(false);

  const onFocusHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocused(true);
    onFocus && onFocus(e);
  };
  const onBlurHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
    setFocused(false);
    onBlur && onBlur(e);
  };

  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      <input
        name={name}
        placeholder={placeholder}
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
      {touched && error && <div className="error-msg">{error}</div>}
    </div>
  );
};

export default TextInput;
