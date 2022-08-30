import styles from './index.module.scss';

import Footer from '../../components/Footer';

const DocumentWrapper = ({ children }) => (
  <div className={styles.container}>
    {children}

    <Footer />
  </div>
);
export default DocumentWrapper;
