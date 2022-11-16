import styles from './styles.module.scss';
import styled from 'styled-components';

import { Icon } from '../Icon';
import { colors } from '../../styles/colors';

const Link = styled.a`
  background-color: ${({ theme }) =>
    theme === 'dark' ? colors.main : colors.white};

  .${styles.text} {
    color: ${({ theme }) => (theme === 'dark' ? colors.white : colors.main)};
  }
`;

const LinkButtons = ({ link, theme }) => {
  const linkStore = [
    {
      title: 'Google Play',
      href: link.googlePlay,
      icon: 'googlePlay',
    },
    {
      title: 'App Store',
      href: link.appStore,
      icon: 'appStore',
    },
  ];

  return (
    <div className={styles.storeLink}>
      {linkStore.map(({ title, href, icon }) => (
        <Link
          key={title}
          className={styles.link}
          theme={theme}
          href={href ? href : null}
          target={href ? '_blank' : null}
          rel={href ? 'noreferrer' : null}
        >
          <div className={styles.icon}>
            <Icon name={icon} size={24} />
          </div>
          <div className={styles.text}>
            {href ? (
              <>
                <p className="downFont">Download on the</p>
                <p className="smallFont">{title}</p>
              </>
            ) : (
              <p className={`${styles.soon} smallFont`}>Coming soon</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LinkButtons;
