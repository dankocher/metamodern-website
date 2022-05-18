import styles from "./index.module.scss";

import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../navigation/constants";

import logo from "../../assets/images/logo.png";

import translation from "../../i18n/en.json";

const Header = () => {
  const navigate = useNavigate();

  const navigateTo = (path: SCREENS) => {
    navigate(path);
  };

  return (
    <div className={`latoSemibold2024 ${styles.container}`}>
      <div className={styles.logo}>
        {/* <div
          className={styles.logo__touchable}
          onClick={() => navigateTo(SCREENS.HOME)}
        >
        </div> */}

        <img src={logo} />
        <div
          className={styles.logo__touchable}
          onClick={() => navigateTo(SCREENS.HOME)}
        />
      </div>

      <ul className={styles.menu}>
        <li onClick={() => navigateTo(SCREENS.PORTFOLIO)}>
          {translation.portfolio}
        </li>
        <li onClick={() => navigateTo(SCREENS.ABOUT_US)}>
          {translation.aboutUs}
        </li>
        <li onClick={() => navigateTo(SCREENS.CONTACTS)}>
          {translation.contacts}
        </li>
      </ul>
    </div>
  );
};

export default Header;
