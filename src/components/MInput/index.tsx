import styles from './index.module.scss';

import { FC, InputHTMLAttributes, useRef } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const MInput: FC<IProps> = ({ label, ...props }) => {
  const ref = useRef(null);
  return (
    <div className={styles.wrapper} onClick={() => ref?.current?.focus()}>
      <div className={styles.container}>
        <input ref={ref} className="interRegular2436" {...props} />
        <span className="interRegular2436">{label}</span>
        <div />
      </div>
    </div>
  );
};

export default MInput;
