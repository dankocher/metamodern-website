import styles from './layout.module.scss';

import { Footer, Header } from './index';

export const Layout = ({ children, theme, positionHeader, privacyLink }) => (
  <div className={styles.layout}>
    <main>{children}</main>
    <Footer theme={theme} />
  </div>
);
