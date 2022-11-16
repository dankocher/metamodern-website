import styles from './layout.module.scss';
import ProjectFooter from './ProjectFooter';

export const Layout = ({ children, theme }) => (
  <div className={styles.layout}>
    <main>{children}</main>
    <ProjectFooter theme={theme} />
  </div>
);
