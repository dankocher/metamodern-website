import { useNavigate } from 'react-router-dom';

import { useModalMenuContext } from '../../context/useModalMenuContext';
import { useIsCleanUpContactsContext } from '../../context/useIsCleanUpContacts';

import { SCREENS } from '../../navigation/constants';

import translation from '../../i18n/en.json';
import OvalButton from '../OvalButton';
import { useIsPage } from '../../utils/hooks/useIsPage';

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

  return (
    <OvalButton
      label={translation.contactUs}
      selected={isContactsPage}
      onClick={startButtonHandler}
    />
  );
};

export default StartProjectButton;
