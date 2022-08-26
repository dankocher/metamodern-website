import styles from './index.module.scss';

import { useContext, useEffect } from 'react';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import { SCREENS } from '../../navigation/constants';

import Item from './Item';

import translation from '../../i18n/en.json';
import StartProjectButton from '../StartProjectButton';
import { ScrollContext } from '../DesctopAppContent/DesctopAppContent';

const ModalMenu = () => {
  const { isVisible } = useModalMenuContext();
  const scrollbarRef = useContext(ScrollContext);
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

  return (
    <div style={{ left: isVisible ? 0 : '200%' }} className={styles.container}>
      <div className={styles.middleBtn_wrapper}>
        <StartProjectButton />
      </div>

      <ul className='gilroyBlack82'>
        <Item link={SCREENS.PORTFOLIO} title={translation.portfolio} />
        <Item link={SCREENS.ABOUT_US} title={translation.aboutUs} />
        <Item link={SCREENS.CONTACTS} title={translation.contacts} />
      </ul>
    </div>
  );
};

export default ModalMenu;
