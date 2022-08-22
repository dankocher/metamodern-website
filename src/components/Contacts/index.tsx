import styles from './index.module.scss';

import { FC } from 'react';

import translate from '../../i18n/en.json';

import { contacts } from '../../data/contacts';

const Contacts: FC = () => {
  const telegramTitle = 'MetamodernSales';

  return (
    <div className={styles.container}>
      <div>
        <h2 className='bebasNeue132'>{translate.contacts}</h2>
        <div className={styles.contacts}>
          <p className='interMedium2432'>{translate.telegram}</p>
          <a
            className='interRegular2024'
            href={`https://t.me/${contacts.telegram}`}
            target='_blank'
            rel='noopener noreferrer'
          >{`@${telegramTitle}`}</a>

          <p className='interMedium2432'>{translate.email}</p>
          <a className='interRegular2024' href={`mailto:${contacts.mail}`}>
            {contacts.mail}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
