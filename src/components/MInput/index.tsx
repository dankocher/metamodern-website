import styles from './index.module.scss';

import { FC } from 'react';

const MInput: FC<{
  label: string;
  value?: string;
  onChange?: (value: string) => void;
}> = ({ label, value, onChange }) => {
  const onChangeHandler = (event) => onChange(event.target.value);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input
          className="interRegular2436"
          required={true}
          onChange={onChangeHandler}
          value={value}
        />
        <span className="interRegular2436">{label}</span>
        <div />
      </div>
    </div>
  );
};

export default MInput;