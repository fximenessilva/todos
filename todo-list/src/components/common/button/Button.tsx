import React from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'danger';
}
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`${styles.button} ${styles[`variant-${variant}`]}`}
    >
      {children}
    </button>
  );
};

export default Button;
