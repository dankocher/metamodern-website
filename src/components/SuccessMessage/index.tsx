import styles from './index.module.scss';

import { FC } from 'react';

import { Link } from 'react-router-dom';

import { SCREENS } from '../../navigation/constants';

import translate from '../../i18n/en.json';

const SuccessMessage: FC = () => {
  return (
    <div className={styles.container}>
      <h1 className="bebasNeue13260">{translate.thxForMessage}</h1>
      <p className="latoSemibold2432">
        {translate.youCanSee}{' '}
        <Link to={SCREENS.PORTFOLIO}>{translate.ourWork}</Link>
      </p>
    </div>
  );
};

export default SuccessMessage;
