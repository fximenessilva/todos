import React from 'react';

import { isLightOrDarkHex } from '../../../utils';
import styles from './item.module.scss';

interface RootProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const Root: React.FC<RootProps> = ({ children, backgroundColor }) => {
  const isDarkOrLight = isLightOrDarkHex(backgroundColor);

  return (
    <div
      style={{ backgroundColor: `#${backgroundColor}` }}
      className={`${styles.wrapper} ${styles[`${isDarkOrLight}-wrapper`]}`}
    >
      {children}
    </div>
  );
};

export default Root;
