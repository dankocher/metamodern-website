import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { useModalMenuContext } from '../../context/useModalMenuContext';
import { useIsCleanUpContactsContext } from '../../context/useIsCleanUpContacts';

import { SCREENS } from '../../navigation/constants';

import translation from '../../i18n/en.json';
import OvalButton from '../OvalButton';
import { useIsPage } from '../../utils/hooks/useIsPage';
import RoundedButton from '../RoundedButton';
import { colors } from '../../styles/colors';

const StartProjectButton = () => {
  const { setIsVisible } = useModalMenuContext();

  const { setIsCleanUpContacts } = useIsCleanUpContactsContext();

  const navigate = useNavigate();

  const isContactsPage = useIsPage(SCREENS.CONTACTS);

  const startButtonHandler = () => {
    if (isContactsPage) {
      setIsCleanUpContacts(true);
    } else {
      navigate(SCREENS.CONTACTS);
    }
    setIsVisible(false);
  };
  const bgColor = isContactsPage ? colors.accentYellow : colors.mainBlack;
  const textColor = isContactsPage?colors.mainBlack : colors.white;
  return (
    // <OvalButton
    //   label={translation.contactUs}
    //   selected={isContactsPage}
    //   onClick={startButtonHandler}
    // />
    <RoundedButton onClick={startButtonHandler}
        bgColor={bgColor}
        hoverColor={bgColor}
        textHoverColor  ={textColor}
        textColor={textColor}
        textClass={'latoSemibold2024'} className={`${styles.button} ${
      isContactsPage? styles.selected : ''
    }`}>
{translation.contactUs}
    </RoundedButton>
  );
};

export default StartProjectButton;
