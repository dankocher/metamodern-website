import styles from '../index.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsPage } from '../../../hooks/useIsPage';
import { SCREENS } from '../../../navigation/constants';
import { colors } from '../../../styles/colors';
import { Icon } from '../../../projects/src/components/Icon';
import { useEffect, useState } from 'react';
const themes = {
  WHITE: 'white',
  BLACK: 'black',
};

const screensWithBlackTheme = [SCREENS.TOD];

const Logo = ({ location, isSubProject, comparePathes, onClick }) => {
  const [theme, setTheme] = useState(themes.WHITE);

  useEffect(() => {
    if (comparePathes(location.pathname, screensWithBlackTheme))
      setTheme(themes.WHITE);
    else setTheme(themes.BLACK);
  }, [location.pathname]);

  return (
    <div className={styles.logo} onClick={onClick}>
      <Icon
        name="logo"
        color={theme === themes.WHITE ? colors.white : colors.secondBlack}
        className={styles.iconMain}
      />
      <Icon
        name="logo"
        className={styles.iconGradient}
        color={isSubProject ? null : colors.yellow100}
      />
    </div>
  );
};

export default Logo;
