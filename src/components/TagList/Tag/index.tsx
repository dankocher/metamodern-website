import styles from './index.module.scss';

import { FC } from 'react';

const Tag: FC<{
  selected?: boolean;
  label: string;
  onClick?: () => void;
}> = ({ selected = false, label, onClick = () => {} }) => {
  return (
    <button
      className={`interMedium2028 ${styles.button} ${
        selected ? styles.selected : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Tag;
