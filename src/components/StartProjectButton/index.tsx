import { useNavigate } from 'react-router-dom';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import { SCREENS } from '../../navigation/constants';

import translation from '../../i18n/en.json';
import OvalButton from '../OvalButton';
import { useIsPage } from '../../hooks/useIsPage';

const StartProjectButton = () => {
  const { setIsVisible } = useModalMenuContext();

  const navigate = useNavigate();

  const isContactsPage = useIsPage(SCREENS.CONTACTS);

  const startButtonHandler = () => {
    if (isContactsPage) {
      navigate(0);
    } else {
      navigate(SCREENS.CONTACTS);
    }

    setIsVisible(false);
  };

  return (
    <OvalButton
      label={translation.startProject}
      selected={isContactsPage}
      onClick={startButtonHandler}
    />
  );
};

export default StartProjectButton;
