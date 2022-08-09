import styles from './styles.module.scss';

import { SCREENS } from '../../navigation/constants';
import { Link } from 'react-router-dom';

import { mainLogo } from '../../assets/svg/logo';
import behance from '../../assets/svg/behance.svg';
import dribbble from '../../assets/svg/dribbble.svg';
import linkedin from '../../assets/svg/linkedin.svg';

import { contacts } from '../../data/contacts';

const Footer = () => {
  const year: number = new Date().getFullYear();

  const company: string = 'MetaModern';

  const constText = {
    termOfUse: 'Terms of service',
    privacyPolicy: 'Privacy Policy',
  };

  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <Link to={SCREENS.HOME}>{mainLogo}</Link>
      </div>

      <div className={styles.info}>
        <div
          className={`${styles.info__links} ${styles.noSelect} footerMainFont`}
        >
          {/* <Link to={'SCREENS.PRIVACY'}>{constText.termOfUse}</Link> */}
          <Link to={SCREENS.META_MODERN_PRIVACY}>
            {constText.privacyPolicy}
          </Link>
          <a href={`mailto:${contacts.mail}`}>{contacts.mail}</a>
        </div>
        <p className={'footerSubtitleFont'}>
          {year} © {company}
        </p>
      </div>
      <div className={styles.social}>
        <a href={contacts.behance} rel="noreferrer\" target="_blank\">
          <img src={behance} />
        </a>

        <a href={contacts.dribbble} rel="noreferrer\" target="_blank\">
          <img src={dribbble} />
        </a>

        <a href={contacts.linkedin} rel="noreferrer\" target="_blank\">
          <img src={linkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
