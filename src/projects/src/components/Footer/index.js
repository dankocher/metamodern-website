import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

import { colors } from '../../styles/colors';

import Data from '../../../content/main-data-projects.json';
import { SCREENS } from '../../../../navigation/constants';

const Footer = ({ theme }) => {
  const year = new Date().getFullYear();
  const color = theme === 'white' ? colors.white : colors.main;

  const privacyPolicy = 'Privacy Policy';

  return (
    <footer className={styles.footer}>
      <div className={styles.info} style={{ color: color }}>
        <div className={`${styles.info__links} subtitle0`}>
          <Link to={SCREENS.META_MODERN_PRIVACY}>{privacyPolicy}</Link>
          <a href={`mailto:${Data.link.mail}`}>{Data.link.mail}</a>
        </div>
        <p className={`${styles.info__data} subtitle`}>
          {year} © {Data.title}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
