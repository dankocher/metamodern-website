import styles from './index.module.scss';

import { FC } from 'react';

const OvalButton: FC<{
  selected?: boolean;
  label: string;
  onClick?: () => void;
}> = ({ selected = false, label, onClick = () => {} }) => {
  return (
    <button
      className={`latoSemibold2024 ${styles.button} ${
        selected ? styles.selected : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default OvalButton;
