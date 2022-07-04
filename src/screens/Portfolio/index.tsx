import styles from './index.module.scss';

import { useState } from 'react';

import { ProjectsTypes, projectsTypes } from '../../constants/projectTypes';

import ProjectList from '../../components/ProjectList';
import FilterList from '../../components/FilterList';

import translation from '../../i18n/en.json';

const PortfolioScreen = () => {
  const [currentFilterList, setCurrentFilterList] = useState<ProjectsTypes[]>([
    ProjectsTypes.ALL,
  ]);

  const [currentFilter] = currentFilterList;
  const setCurrentFilterListHandler = (item) => setCurrentFilterList([item]);

  return (
    <>
      <div className={styles.container}>
        <h2 className={`bebasNeue132 ${styles.header}`}>
          {translation.portfolio}
        </h2>
        <FilterList
          filterList={projectsTypes}
          currentFilterList={currentFilterList}
          setCurrentFilterList={setCurrentFilterListHandler}
        />
      </div>
      <ProjectList currentFilter={currentFilter} />
    </>
  );
};

export default PortfolioScreen;
