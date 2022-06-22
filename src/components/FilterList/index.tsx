import styles from './index.module.scss';

import { FC } from 'react';

import OvalButton from '../OvalButton';

import translation from '../../i18n/en.json';

const FilterList: FC<{
  //   label: string;
  //   onClick?: () => void;
}> = () => {
  return (
    <div className={styles.container}>
      <OvalButton selected={true} label="All projects" />
      <OvalButton label="CRM" />
      <OvalButton label="FBI" />
    </div>
  );
};

export default FilterList;
