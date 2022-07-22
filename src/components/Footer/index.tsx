import styles from './styles.module.scss';

import { mail, company } from './constants';
import { SCREENS } from '../../navigation/constants';
import { Link } from 'react-router-dom';

import { mainLogo } from '../../assets/svg/logo';
import behance from '../../assets/svg/behance.svg';
import dribbble from '../../assets/svg/dribbble.svg';
import instagram from '../../assets/svg/instagram.svg';

const Footer = () => {
  const year: number = new Date().getFullYear();

  const constText = {
    termOfUse: 'Terms of service',
    privacyPolicy: 'Privacy Policy',
  };

  return (
    <footer className={styles.footer}>
      {mainLogo}
      <div className={styles.info}>
        <div
          className={`${styles.info__links} ${styles.noSelect} footerMainFont`}
        >
          <Link to={'SCREENS.PRIVACY'}>{constText.termOfUse}</Link>
          <Link to={'SCREENS.PRIVACY'}>{constText.privacyPolicy}</Link>
          <a href={`mailto:${mail}`}>{mail}</a>
        </div>
        <p className={'footerSubtitleFont'}>
          {year} © {company}
        </p>
      </div>
      <div className={styles.social}>
        <a>
          <img src={behance} />
        </a>
        <a>
          <img src={dribbble} />
        </a>
        <a>
          <img src={instagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
