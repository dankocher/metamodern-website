import styles from './index.module.scss';

import { useContext, useEffect } from 'react';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import { SCREENS } from '../../navigation/constants';

import Item from './Item';

import translation from '../../i18n/en.json';
import StartProjectButton from '../StartProjectButton';
import { ScrollContext } from '../DesctopAppContent/DesctopAppContent';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBlock from '../AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';
import { variables as v } from '../../constants/animationVariables';
import { useLocation } from 'react-router-dom';

const duration = v.duration *0.6;

const ModalMenu = () => {
  const { isVisible } = useModalMenuContext();
  const scrollbarRef = useContext(ScrollContext);
  const location = useLocation();
  useEffect(() => {
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
  }, [isVisible]);

  let variants = {
    initial: { x: '100vw' },
    animate: { x: isVisible ? 0 : '100vw' },
    exit: { x: '100vw', transition: {duration: duration, delay: 0.2 } },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <motion.div
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

          <ul className='gilroyBlack82'>
            <Item link={SCREENS.PORTFOLIO} title={translation.portfolio} />
            <Item link={SCREENS.ABOUT_US} title={translation.aboutUs} />
            <Item link={SCREENS.CONTACTS} title={translation.contacts} />
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalMenu;
