import styles from './index.module.scss';

import { Link } from 'react-router-dom';

import Footer from '../../components/Footer';

import { mainLogo } from '../../assets/svg/logo';

import { SCREENS } from '../../navigation/constants';

const DocumentWrapper = ({ children }) => (
  <div className={styles.container}>
    {children}

    <Footer />
  </div>
);
export default DocumentWrapper;
