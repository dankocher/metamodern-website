import styles from './index.module.scss';

import { FC } from 'react';

import OvalButton from '../OvalButton';

import { ProjectTypes } from '../../constants/projectTypes';

const FilterList: FC<{
  currentFilter: ProjectTypes;
  setCurrentFilter: React.Dispatch<React.SetStateAction<ProjectTypes>>;
}> = ({ currentFilter, setCurrentFilter }) => {
  return (
    <div className={styles.container}>
      {Object.keys(ProjectTypes).map((item) => (
        <OvalButton
          selected={currentFilter === ProjectTypes[item]}
          label={ProjectTypes[item]}
          onClick={() => setCurrentFilter(ProjectTypes[item])}
        />
      ))}
    </div>
  );
};

export default FilterList;
