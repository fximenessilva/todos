import React from 'react';
import styles from './checkbox.module.scss';

interface CheckboxProps {
  label: string;
  checked: boolean | undefined;
  onChange: any;
  name?: string;
  value?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  name,
  value,
}) => {
  return (
    <div className={styles.right}>
      <span className={styles.label}>{label}</span>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          className={styles.checkboxInput}
          checked={checked}
          onChange={onChange}
          name={name || ''}
          value={value}
        />
        <span className={styles.checkboxCustom}>
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="0.85em"
              viewBox="0 0 448 512"
              className={styles.svg}
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          )}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
