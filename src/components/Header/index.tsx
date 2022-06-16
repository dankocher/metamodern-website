import styles from './index.module.scss';

import { useNavigate } from 'react-router-dom';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import logo from '../../assets/images/logo.png';

import Menu from '../Menu';
import { IconMenuButton, IconButton } from '../ActiveIcon';
import StartProjectButton from '../StartProjectButton';

import { SCREENS } from '../../navigation/constants';

const Header = () => {
  const { setIsVisible } = useModalMenuContext();

  const navigate = useNavigate();

  const altMainLogo = 'MetaModernLogo';

  const menuLogoHandler = () => {
    navigate(SCREENS.HOME);
    setIsVisible(false);
  };

  const openModalMenu = () => setIsVisible((isVisible) => !isVisible);

  return (
    <div className={styles.container}>
      <Menu />

      <IconButton icon={logo} alt={altMainLogo} onClick={menuLogoHandler} />

      <div className={styles.middleBtn_wrapper}>
        <StartProjectButton />
      </div>

      <IconMenuButton onClick={openModalMenu} />
    </div>
  );
};

export default Header;
