import styles from './index.module.scss';

import Contacts from '../../components/Contacts';
import Brief from '../../components/Brief';

const ContactsScreen = () => {
  return (
    <div className={styles.container}>
      <Contacts />
      <Brief />
    </div>
  );
};

export default ContactsScreen;
