import React from "react";

import styles from "./item.module.scss";

interface LabelProps {
  title: string;
}

const Label: React.FC<LabelProps> = ({ title }) => {
  return (
    <div className={styles.left}>
      <span className={styles.label}>{title}</span>
    </div>
  );
};

export default Label;
