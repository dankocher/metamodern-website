import styles from './index.module.scss';

import OvalButton from '../OvalButton';

interface FilterListProps<T extends string> {
  filterList: { [key in T]: string };
  currentFilterList: T[];
  setCurrentFilterList: React.Dispatch<React.SetStateAction<T>>;
}

const FilterList = <T extends string>({
  filterList,
  currentFilterList,
  setCurrentFilterList,
}: FilterListProps<T>) => {
  return (
    <div className={styles.container}>
      {Object.keys(filterList).map((key) => (
        <OvalButton
          selected={currentFilterList.some((item) => item === key)}
          label={filterList[key]}
          onClick={() => setCurrentFilterList(key as T)}
        />
      ))}
    </div>
  );
};

export default FilterList;
