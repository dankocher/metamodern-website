import styles from './index.module.scss';

import { FC, useState } from 'react';

import TagList from '../TagList';

import translate from '../../i18n/en.json';
import { ServicesTypes, servicesTypes } from '../../constants/servicesTypes';

const Brief: FC<{}> = () => {
  const [currentServices, setCurrentServices] = useState<ServicesTypes[]>([]);

  const setCurrentServicesHandler = (item) => {
    const index = currentServices.indexOf(item);
    if (index < 0) {
      setCurrentServices((prev) => [...prev, item]);
    } else {
      setCurrentServices((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1, prev.length),
      ]);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className="bebasNeue132">{translate.fillBrief}</h2>
      <div>
        <h5 className="interMedium2432">{translate.whatServices}</h5>
        <h5 className="interMedium2432">{translate.writeAboutProject}</h5>
        <TagList
          tagList={servicesTypes}
          selectedTagList={currentServices}
          setSelectedTagList={setCurrentServicesHandler}
        />
      </div>
    </div>
  );
};

export default Brief;
