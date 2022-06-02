import styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../navigation/constants";

import { useModalMenuContext } from "../../context/useModalMenuContext";

import logo from "../../assets/images/logo.png";

import Menu from "../Menu";
import { IconButton, IconLink } from "../ActiveIcon";

const Header = () => {
  const { isVisible, setIsVisible } = useModalMenuContext();

  const navigate = useNavigate();

  const menuLogoHandler = () => {
    navigate(SCREENS.HOME);
    if (isVisible) {
      setIsVisible(false);
    }
  };

  const openModalMenu = () => setIsVisible((isVisible) => !isVisible);

  return (
    <div className={styles.container}>
      <Menu />

      <IconLink icon={logo} onClick={menuLogoHandler} />

      <IconButton onClick={openModalMenu} />
    </div>
  );
};

export default Header;
