import styles from "./index.module.scss";

import { useEffect } from "react";

import { useModalMenuContext } from "../../context/useModalMenuContext";

import { SCREENS } from "../../navigation/constants";

import Item from "./Item";

import { IconButton, IconLink } from "../ActiveIcon";

import logo from "../../assets/images/logo.png";
import close from "../../assets/images/close.png";
import translation from "../../i18n/en.json";

const ModalMenu = () => {
  const { isVisible, setIsVisible } = useModalMenuContext();

  const openModalMenu = () => setIsVisible(false);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.overflowY = isVisible
      ? "hidden"
      : "auto";
  }, [isVisible]);

  return (
    <div style={{ left: isVisible ? 0 : "200%" }} className={styles.container}>
      {/* <div className={styles.header}>
        <IconLink icon={logo} link={SCREENS.HOME} />

        <IconButton icon={close} onClick={openModalMenu} />
      </div> */}
      <ul className="gilroyBlack82">
        <Item link={SCREENS.PORTFOLIO} title={translation.portfolio} />
        <Item link={SCREENS.ABOUT_US} title={translation.aboutUs} />
        <Item link={SCREENS.CONTACTS} title={translation.contacts} />
      </ul>
    </div>
  );
};

export default ModalMenu;
