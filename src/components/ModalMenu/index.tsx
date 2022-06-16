import styles from './index.module.scss';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import { SCREENS } from '../../navigation/constants';

import Item from './Item';

import translation from '../../i18n/en.json';
import OvalButton from '../OvalButton';

const ModalMenu = () => {
  const { isVisible, setIsVisible } = useModalMenuContext();
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflowY = isVisible
      ? 'hidden'
      : 'auto';
    document.getElementsByTagName('body')[0].style.overflowY = isVisible
      ? 'hidden'
      : 'auto';
  }, [isVisible]);

  const startButtonHandler = () => {
    navigate(SCREENS.CONTACTS);
    setIsVisible(false);
  };

  return (
    <div style={{ left: isVisible ? 0 : '200%' }} className={styles.container}>
      <div className={styles.middleBtn_wrapper}>
        <OvalButton
          label={translation.startProject}
          onClick={startButtonHandler}
        />
      </div>
      <ul className="gilroyBlack82">
        <Item link={SCREENS.PORTFOLIO} title={translation.portfolio} />
        <Item link={SCREENS.ABOUT_US} title={translation.aboutUs} />
        <Item link={SCREENS.CONTACTS} title={translation.contacts} />
      </ul>
    </div>
  );
};

export default ModalMenu;
