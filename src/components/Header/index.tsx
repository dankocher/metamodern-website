import styles from './index.module.scss';

import { SCREENS } from '../../navigation/constants';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import logo from '../../assets/images/logo.png';

import Menu from '../Menu';
import { IconButton, IconLink } from '../ActiveIcon';
import OvalButton from '../OvalButton';

import translation from '../../i18n/en.json';

const Header = () => {
  const { isVisible, setIsVisible } = useModalMenuContext();

  const altMainLogo = 'MetaModernLogo';

  const menuLogoHandler = () => {
    if (isVisible) {
      setIsVisible(false);
    }
  };

  const openModalMenu = () => setIsVisible((isVisible) => !isVisible);

  return (
    <div className={styles.container}>
      <Menu />

      <IconLink
        icon={logo}
        alt={altMainLogo}
        link={SCREENS.HOME}
        onClick={menuLogoHandler}
      />

      <div className={styles.middleBtn_wrapper}>
        <OvalButton label={translation.startProject} />
      </div>

      <IconButton onClick={openModalMenu} />
    </div>
  );
};

export default Header;
