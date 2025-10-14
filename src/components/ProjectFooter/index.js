import styles from './styles.module.scss';

import { Link } from 'react-router-dom';

import { colors } from '../../styles/colors';

import { SCREENS } from '../../navigation/constants';
import { contacts } from "../../data/contacts";

const ProjectFooter = ({ theme }) => {
  const year = new Date().getFullYear();
  const color = theme === 'white' ? colors.white : colors.main;

  const privacyPolicy = 'Privacy Policy';

  return (
    <footer className={styles.footer}>
      <div className={styles.info} style={{ color: color }}>
        <div className={`${styles.info__links} subtitle0`}>
          <Link to={SCREENS.META_MODERN_PRIVACY}>{privacyPolicy}</Link>
          <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
        </div>
        <p className={`${styles.info__data} subtitle`}>
          {year} © MetaModern
        </p>
      </div>
    </footer>
  );
};

export default ProjectFooter;