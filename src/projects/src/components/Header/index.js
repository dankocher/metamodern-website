import { useEffect } from 'react';
import styles from './styles.module.scss';

import { Link } from 'react-router-dom';
import { Icon } from '../Icon';

import { colors } from '../../styles/colors';

const Header = ({ theme, positionHeader }) => {
  useEffect(() => {
    window.document.getElementsByTagName('html')[0].id = 'container-noise';
    window.document.getElementsByTagName('html')[0].style.backgroundColor =
      null;
  }, []);

  return (
    <header className={styles.header} style={{ position: positionHeader }}>
      <Link
        to="/"
        className={styles.logo}
        // onClick={() => {
        //   (location.pathname === '/' ||
        //     location.pathname === '/metamodern.dev/') &&
        //     location.reload();
        // }}
      >
        <Icon
          name="logo"
          color={theme === 'white' ? colors.white : colors.main}
          className={styles.iconMain}
        />
        <Icon name="logo" className={styles.iconGradient} />
      </Link>
    </header>
  );
};

export default Header;
