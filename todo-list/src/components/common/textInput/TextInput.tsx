import React, { ChangeEvent, FocusEvent } from 'react';

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
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      <input
        name={name}
        placeholder={placeholder}
        type='text'
        className={styles.input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {touched && error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextInput;