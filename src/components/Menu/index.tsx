import styles from './index.module.scss';

import { SCREENS } from '../../navigation/constants';
import Item from './Item';

import translation from '../../i18n/en.json';

const Menu = () => {
  return (
    <ul className={`latoSemibold2024  ${styles.menu}`}>
      <Item link={SCREENS.PORTFOLIO} title={translation.portfolio} />
      <Item link={SCREENS.ABOUT_US} title={translation.aboutUs} />
      <Item link={SCREENS.CONTACTS} title={translation.contacts} />
    </ul>
  );
};

export default Menu;
