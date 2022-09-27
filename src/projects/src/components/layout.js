import styles from './layout.module.scss';

import { Footer } from './index';

export const Layout = ({ children, theme }) => (
  <div className={styles.layout}>
    <main>{children}</main>
    <Footer theme={theme} />
  </div>
);
