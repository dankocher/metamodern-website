import styles from './index.module.scss';

import { useEffect } from 'react';

import { useModalMenuContext } from '../../context/useModalMenuContext';
import { useIsPage } from '../../hooks/useIsPage';

import { SCREENS } from '../../navigation/constants';

import Item from './Item';

import translation from '../../i18n/en.json';
import StartProjectButton from '../StartProjectButton';

const ModalMenu = () => {
  const { isVisible } = useModalMenuContext();

  const isNotContactsPage = !useIsPage(SCREENS.CONTACTS);

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflowY = isVisible
      ? 'hidden'
      : 'auto';
    document.getElementsByTagName('body')[0].style.overflowY = isVisible
      ? 'hidden'
      : 'auto';
  }, [isVisible]);

  return (
    <div style={{ left: isVisible ? 0 : '200%' }} className={styles.container}>
      {isNotContactsPage && (
        <div className={styles.middleBtn_wrapper}>
          <StartProjectButton />
        </div>
      )}

      <ul className="gilroyBlack82">
        <Item link={SCREENS.PORTFOLIO} title={translation.portfolio} />
        <Item link={SCREENS.ABOUT_US} title={translation.aboutUs} />
        <Item link={SCREENS.CONTACTS} title={translation.contacts} />
      </ul>
    </div>
  );
};

export default ModalMenu;
