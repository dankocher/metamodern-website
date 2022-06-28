import styles from './index.module.scss';

import { FC } from 'react';

import { ProjectTypes } from '../../constants/projectTypes';

import FilterList from '../FilterList';

import translation from '../../i18n/en.json';

const PortfolioOptions: FC<{
  currentFilter: ProjectTypes;
  setCurrentFilter: React.Dispatch<React.SetStateAction<ProjectTypes>>;
}> = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <h2 className={`bebasNeue132 ${styles.header}`}>
        {translation.portfolio}
      </h2>
      <FilterList {...props} />
    </div>
  );
};

export default PortfolioOptions;
