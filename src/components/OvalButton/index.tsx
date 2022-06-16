import styles from './index.module.scss';

import { FC } from 'react';

const OvalButton: FC<{
  label: string;
  onClick?: () => void;
}> = ({ label, onClick = () => {} }) => {
  return (
    <button className={`latoSemibold2028 ${styles.button}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default OvalButton;
