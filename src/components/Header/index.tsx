import styles from './index.module.scss';

import { useLocation, useNavigate } from 'react-router-dom';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import logo from '../../assets/images/logo.png';

import Menu from '../Menu';
import { IconMenuButton, IconButton } from '../ActiveIcon';
import StartProjectButton from '../StartProjectButton';

import { SCREENS } from '../../navigation/constants';

const Header = () => {
  const location = useLocation();

  const { setIsVisible } = useModalMenuContext();

  const navigate = useNavigate();

  const altMainLogo = 'MetaModernLogo';

  const isHomePage = () => location.pathname === SCREENS.HOME;

  const menuLogoHandler = () => {
    navigate(SCREENS.HOME);
    setIsVisible(false);
  };

  const openModalMenu = () => setIsVisible((isVisible) => !isVisible);

  return (
    <div
      className={styles.container}
      style={{ position: isHomePage() ? 'absolute' : 'relative' }}
    >
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
