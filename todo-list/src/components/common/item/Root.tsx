import React from "react";

import styles from "./item.module.scss";

interface RootProps {
  children: React.ReactNode;
  backgroundColor: string;
}

const Root: React.FC<RootProps> = ({ children, backgroundColor }) => {
  return (
    <div style={{ backgroundColor }} className={styles.wrapper}>
      {children}
    </div>
  );
};

export default Root;
