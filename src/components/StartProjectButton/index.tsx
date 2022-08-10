import { useLocation, useNavigate } from 'react-router-dom';

import { useModalMenuContext } from '../../context/useModalMenuContext';

import { SCREENS } from '../../navigation/constants';

import translation from '../../i18n/en.json';
import OvalButton from '../OvalButton';

const StartProjectButton = () => {
  const { setIsVisible } = useModalMenuContext();
  const location = useLocation();
  const navigate = useNavigate();

  const startButtonHandler = () => {
    if (location.pathname === SCREENS.CONTACTS) {
      navigate(0);
    } else {
      navigate(SCREENS.CONTACTS);
    }

    setIsVisible(false);
  };

  return (
    <OvalButton label={translation.startProject} onClick={startButtonHandler} />
  );
};

export default StartProjectButton;
