import styles from './index.module.scss';

import * as React from 'react';

const MInput = React.forwardRef<HTMLInputElement, { label: string }>(
  ({ label, ...props }, ref) => (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <input ref={ref} className="interRegular2436" {...props} />
        <span className="interRegular2436">{label}</span>
        <div />
      </div>
    </div>
  )
);

export default MInput;
