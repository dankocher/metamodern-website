import styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../navigation/constants";

import logo from "../../assets/images/logo.png";
import menuLogo from "../../assets/images/menuLogo.png";

import Menu from "../Menu";

const Header = () => {
  const navigate = useNavigate();

  const navigateTo = (path: SCREENS) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <Menu />

      <a className={styles.logo} onClick={() => navigateTo(SCREENS.HOME)}>
        <img src={logo} />
      </a>

      <button
        className={styles.menuLogo}
        onClick={() => navigateTo(SCREENS.HOME)}
      >
        <img src={menuLogo} />
      </button>
    </div>
  );
};

export default Header;
