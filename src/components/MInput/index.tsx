import styles from './index.module.scss';

import { FC, InputHTMLAttributes, useRef } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
}

const MInput: FC<IProps> = ({ label, error, ...props }) => {
  const ref = useRef(null);
  return (
    <div className={styles.wrapper} onClick={() => ref?.current?.focus()}>
      <div className={`${styles.container}`}>
        <input ref={ref} className="interRegular2028" {...props} />
        <span className="interRegular2028">{label}</span>
        <div className={error != null ? `${styles.error} interMedium1622` : ''} />
      </div>
      {error && <span className="interMedium1622">{error}</span>}
    </div>
  );
};

export default MInput;
