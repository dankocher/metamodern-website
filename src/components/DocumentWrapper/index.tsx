import styles from './index.module.scss';

import Footer from '../../components/Footer';

const DocumentWrapper = ({ children, withFooter = true }) => (
  <div className={styles.container}>
    {children}
    {withFooter && <Footer />}
  </div>
);
export default DocumentWrapper;
