import styles from './index.module.scss';
import crownImage from '../../assets/images/crown.png';
import RoundedButton from '../RoundedButton';
import { colors } from '../../styles/colors';
import { SCREENS } from '../../navigation/constants';
import { useIsPage } from '../../utils/hooks/useIsPage';
import { useNavigate } from 'react-router-dom';
import { useIsCleanUpContactsContext } from '../../context/useIsCleanUpContacts';
import { animationTypes } from '../../constants/animationTypes';
import AnimatedBlock from '../AnimatedBlock';

const CallToAction = () => {
  const { setIsCleanUpContacts } = useIsCleanUpContactsContext();

  const navigate = useNavigate();

  const isContactsPage = useIsPage(SCREENS.CONTACTS);

  const startButtonHandler = () => {
    if (isContactsPage) {
      setIsCleanUpContacts(true);
    } else {
      navigate(SCREENS.CONTACTS);
    }
  };

  return (
    <AnimatedBlock
      animation={animationTypes.UP}
      options={{
        className: `${styles.container}`,
      }}
    >
      <span className={styles.title + ` bebasNeue132to56`}>
        <img src={crownImage} className={styles.crown} />
        Ready to start <br /> the project?
      </span>
      <RoundedButton
        className={styles.startBtn}
        bgColor={colors.white}
        hoverColor={colors.mainBlack}
        textHoverColor={colors.white}
        onClick={startButtonHandler}
      >
        Start the project
      </RoundedButton>
    </AnimatedBlock>
  );
};

export default CallToAction;
