import styles from './index.module.scss';

import { useContext, useEffect, useRef } from 'react';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import { SCREENS } from '../../navigation/constants';

import Item from './Item';

import translation from '../../i18n/en.json';
import StartProjectButton from '../StartProjectButton';
import { ScrollContext } from '../DesktopAppContent';
import { motion, AnimatePresence } from 'framer-motion';
import { variables as v } from '../../constants/animationVariables';
import { useLocation } from 'react-router-dom';
import { useDeviceSelectors } from 'react-device-detect';

const duration = v.duration * 0.6;

const ModalMenu = () => {
  const modalRef = useRef(null);
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
  const { isVisible, setIsVisible } = useModalMenuContext();
  const scrollbarRef = useContext(ScrollContext);
  const location = useLocation();

  const scrollToTop = (isVisible) => {
    document.getElementsByTagName('html')[0].style.overflowY = isVisible
      ? 'hidden'
      : 'auto';
    document.getElementsByTagName('body')[0].style.overflowY = isVisible
      ? 'hidden'
      : 'auto';
    if (scrollbarRef.current)
      if (isVisible)
        document.querySelector('.scroll-content').classList.add('stopScroll');
      else {
        document
          .querySelector('.scroll-content')
          .classList.remove('stopScroll');
        scrollbarRef.current.scrollbar.scrollTo(0, 0);
      }
    else {
      const html = document.querySelector('html');

      html.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const modalHeight =
      selectors.isIOS && !selectors.isYandex
        ? document.documentElement.clientHeight + 'px'
        : window.innerHeight + 'px';
        // --header-index
    if (isVisible) {
      document.documentElement.style.setProperty('--modal-height', modalHeight);
      document.documentElement.style.setProperty('--body-height', '100vh');
      document.documentElement.style.setProperty('--header-index', 'auto');
    } else {
      document.documentElement.style.setProperty(
        '--body-height',
        'fit-content'
      );
      document.documentElement.style.setProperty('--header-index', '10');
    }

    scrollToTop(isVisible);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener(
      'popstate',
      () => {
        let thisIsVisible = null;
        setIsVisible((prev) => {
          thisIsVisible = prev;
          return prev;
        });
        if (thisIsVisible) {
          setIsVisible(false);

          scrollToTop(false);
          modalRef.current.style.visible = 'none';
          modalRef.current.style.height = '0px';
        }
        console.log(modalRef.current.style.visible);
      },
      false
    );
  }, []);

  let variants = {
    initial: { x: '100vw' },
    animate: { x: isVisible ? 0 : '100vw' },
    exit: { x: '100vw', transition: { duration: duration, delay: 0.2 } },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <motion.div
          ref={modalRef}
          key={location.pathname}
          className={styles.container}
          variants={variants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{ duration: duration, delay: 0 }}
        >
          <div className={styles.middleBtn_wrapper}>
            <StartProjectButton />
          </div>

          <ul className="gilroyBlack82">
            <Item link={SCREENS.SERVICES} title={translation.services} />
            <Item link={SCREENS.PORTFOLIO} title={translation.portfolio} />
            <Item link={SCREENS.ABOUT_US} title={translation.about} />
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalMenu;
