import styles from './index.module.scss';

import { useLocation, useNavigate } from 'react-router-dom';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import Menu from '../Menu';
import IconMenuButton from '../IconMenuButton';
import StartProjectButton from '../StartProjectButton';

import { SCREENS } from '../../navigation/constants';
import Logo from './Logo/Logo';
import { useEffect, useState } from 'react';
import AnimatedBlock from '../AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';
import { variables } from '../../constants/animationVariables';
import { AnimatePresence } from 'framer-motion';

const screensSubProject = [
  SCREENS.TOD,
  SCREENS.TOD_PRIVACY,
  SCREENS.TOD_TERMS,
  SCREENS.TIME_ZO,
  SCREENS.TIME_ZO_PRIVACY,
  SCREENS.TIME_ZO_TERMS,
  SCREENS.META_MODERN_PRIVACY,
];

const comparePathes = (path, patches) => {
  return patches.some((pathname) => path.includes(pathname));
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSubProject, setIsSubProject] = useState(false);
  const [isWhiteTheme, setIsWhiteTheme] = useState(false);

  const { setIsVisible } = useModalMenuContext();

  const menuLogoHandler = () => {
    navigate(SCREENS.HOME);
    setIsVisible(false);
  };

  const openModalMenu = () => setIsVisible((isVisible) => !isVisible);

  useEffect(() => {
    if (comparePathes(location.pathname, screensSubProject))
      setIsSubProject(true);
    else {
      setIsSubProject(false);
      if (comparePathes(location.pathname, [SCREENS.ABOUT_US]))
        setIsWhiteTheme(true);
      else setIsWhiteTheme(false);
    }
  }, [location.pathname]);

  return (
    <header className={styles.container}>
      <AnimatedBlock
        animation={animationTypes.DOWN}
        transition={{ duration: variables.duration, delay: variables.delay }}
        options={{ className: styles.animatedBlock }}
      >
        <Logo
          onClick={menuLogoHandler}
          location={location}
          isSubProject={isSubProject}
          withHover={ !isWhiteTheme}
          comparePathes={comparePathes}
        />
        <AnimatePresence exitBeforeEnter>
          {!isSubProject && (
            <AnimatedBlock
              animation={animationTypes.DEFAULT}
              transition={{
                duration: variables.duration / 2,
                delay: 0.2,
              }}
              options={{
                className: styles.itemsContainer,
                exit: {
                  transition: {
                    delay: 0,
                    duration: variables.duration / 2,
                  },
                  opacity: 0,
                },
              }}
            >
              <Menu isWhiteTheme={isWhiteTheme}/>
              <div className={styles.middleBtn_wrapper}>
                <StartProjectButton />
              </div>

              <IconMenuButton onClick={openModalMenu} />
            </AnimatedBlock>
          )}
        </AnimatePresence>
      </AnimatedBlock>
    </header>
  );
};

export default Header;
