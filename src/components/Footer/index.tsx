import styles from './styles.module.scss';

import { SCREENS } from '../../navigation/constants';
import { Link, NavLink } from 'react-router-dom';

import { mainLogo } from '../../assets/svg/logo';
import behance from '../../assets/svg/behance.svg';
import dribbble from '../../assets/svg/dribbble.svg';
import linkedin from '../../assets/svg/linkedin.svg';

import { contacts } from '../../data/contacts';
import AnimatedBlock from '../AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';

const links = [
  [
    { name: 'Home', path: SCREENS.HOME },
    { name: 'Services', path: SCREENS.SERVICES },
    { name: 'Portfolio', path: SCREENS.PORTFOLIO },
    { name: 'About Us', path: SCREENS.ABOUT_US },
  ],
  [
    { name: 'Contact Us', path: SCREENS.CONTACTS },
    { name: 'Join Us', path: SCREENS.JOIN_US },
    { name: 'Privacy Policy', path: SCREENS.META_MODERN_PRIVACY },
  ],
];

const Footer = ({ backgroundColor = 'transparent' }) => {
  const year: number = new Date().getFullYear();

  const company: string = 'MetaModern';

  const constText = {
    termOfUse: 'Terms of service',
    privacyPolicy: 'Privacy Policy',
    metamodern: 'Metamodern',
  };

  return (
    <AnimatedBlock
      animation={animationTypes.UP}
      options={{
        className: `${styles.wrapper}`,
        style: { backgroundColor: backgroundColor },
      }}
    >
      <footer className={styles.container}>
        <div className={styles.insideContainer}>
          <div className={styles.title_block}>
            <div className={`${styles.title} bebasNeue72`}>
              {constText.metamodern}
            </div>
            <div className={styles.social}>
              <a href={contacts.behance} target="_blank">
                <img src={behance} />
              </a>

              <a href={contacts.dribbble} target="_blank">
                <img src={dribbble} />
              </a>

              <a href={contacts.linkedin} target="_blank">
                <img src={linkedin} />
              </a>
            </div>
          </div>

          <div className={styles.links}>
            {links.map((section) => (
              <section>
                {section.map((item) => (
                  <Link to={item.path}>
                    <span className={'lato2432'}>{item.name}</span>
                  </Link>
                ))}
              </section>
            ))}
            <section>
              <a href={'mailto:support@metamodern.dev'} target="_blank">
                <span className={'lato2432'}>Write to mail</span>
              </a>

              <a href={'https://t.me/panchenko_ko'} target="_blank">
               <span className={'lato2432'}>Write to telegram</span>
              </a>
            </section>
          </div>
        </div>
        <p className={`footerSubtitleFont ${styles.copyright}`}>
          {year} © {company}
        </p>
      </footer>
    </AnimatedBlock>
  );
};

export default Footer;
