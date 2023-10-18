import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './dropdown.module.scss';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  value?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  touched?: boolean;
  error?: string | null;
  setFieldTouched: (name: any, value: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  value,
  name,
  label,
  placeholder = 'Select an option',
  touched = false,
  error = null,
  setFieldTouched,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setFieldTouched(name, isOpen);
  }, [isOpen]);

  useEffect(() => {
    setFieldTouched(name, isOpen);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, setFieldTouched, name]);

  const handleSelect = useCallback(
    (option: string) => {
      onSelect(option);
      setIsOpen(false);
    },
    [onSelect],
  );

  return (
    <>
      <div ref={dropdownRef}>
        <div className={styles['dropdown-container']}>
          {label && <label>{label}</label>}
          <span
            className={styles['dropdown-button']}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{value ? value : placeholder}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </span>
          <div
            className={`${styles['dropdown-menu']} ${
              isOpen ? styles['dropdown-menu-open'] : ''
            }`}
          >
            {options.map((option, i) => (
              <div
                key={i}
                onClick={() => handleSelect(option)}
                className={styles['dropdown-item']}
                data-name={name}
              >
                <div
                  className={styles.color}
                  style={{ backgroundColor: `#${option}` }}
                />
                <span>{option}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {touched && error && <div className="error-msg">{error}</div>}
    </>
  );
};

export default Dropdown;
