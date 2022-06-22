import styles from './index.module.scss';

import { FC } from 'react';

import FilterList from '../FilterList';

import translation from '../../i18n/en.json';

const PortfolioTableOfContents: FC<{
  //   label: string;
  //   onClick?: () => void;
}> = () => {
  return (
    <div className={styles.container}>
      <h2 className={`bebasNeue132 ${styles.header}`}>
        {translation.portfolio}
      </h2>
      <FilterList />
    </div>
  );
};

export default PortfolioTableOfContents;
