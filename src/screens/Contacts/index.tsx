import styles from './index.module.scss';

import Brief from '../../components/Brief';
import AnimatedBlock from '../../components/AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';
import { variables as v } from '../../constants/animationVariables';

const ContactsScreen = () => {
  return (
    <div className={styles.container}>
      <Brief />
      <AnimatedBlock
        animation={animationTypes.UP}
        transition={{ duration: v.duration, delay: v.delay }}
      >
        {/* <Contacts /> */}
      </AnimatedBlock>
    </div>
  );
};

export default ContactsScreen;
