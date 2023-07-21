import styles from "./index.module.scss";

import { SCREENS } from "../../navigation/constants";
import Item from "./Item";

import translation from "../../i18n/en.json";

const Menu = ({ isWhiteTheme }) => {
  return (
    <ul className={`latoSemibold2024  ${styles.menu}`} translate="no">
      {/* <Item
        link={SCREENS.SERVICES}
        title={translation.services}
        isWhiteTheme={isWhiteTheme}
      /> */}
      <Item
        link={SCREENS.HOME}
        title={translation.home}
        isWhiteTheme={isWhiteTheme}
      />
      <Item
        link={SCREENS.PORTFOLIO}
        title={translation.portfolio}
        isWhiteTheme={isWhiteTheme}
      />
      <Item
        link={SCREENS.ABOUT_US}
        title={translation.about}
        isWhiteTheme={isWhiteTheme}
      />
    </ul>
  );
};

export default Menu;
