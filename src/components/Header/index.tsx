import styles from "./index.module.scss";

import { SCREENS } from "../../navigation/constants";

import { useModalMenuContext } from "../../context/useModalMenuContext";

import logo from "../../assets/images/logo.png";
import menuLogo from "../../assets/images/menuLogo.png";

import Menu from "../Menu";
import { IconButton, IconLink } from "../ActiveIcon";

const Header = () => {
  const { setIsVisible } = useModalMenuContext();

  const openModalMenu = () => setIsVisible(true);

  return (
    <div className={styles.container}>
      <Menu />

      <IconLink icon={logo} link={SCREENS.HOME} />

      <IconButton icon={menuLogo} onClick={openModalMenu} />
    </div>
  );
};

export default Header;
