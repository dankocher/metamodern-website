import styles from './index.module.scss';

import { FC, useState } from 'react';

import TagList from '../TagList';
import MInput from '../MInput';

import translate from '../../i18n/en.json';
import { ServicesTypes, servicesTypes } from '../../constants/servicesTypes';
import MTextArea from '../MTextArea';

const Brief: FC<{}> = () => {
  const [currentServices, setCurrentServices] = useState<ServicesTypes[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

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
      <section>
        <h5 className="interMedium2432">{translate.whatServices}</h5>
        <TagList
          tagList={servicesTypes}
          selectedTagList={currentServices}
          setSelectedTagList={setCurrentServicesHandler}
        />
      </section>
      <section className={styles.aboutProject}>
        <h5 className="interMedium2432">{translate.writeAboutProject}</h5>
        <div className={styles.personalInformation}>
          <MInput label={translate.yourName} value={name} onChange={setName} />
          <MInput label={translate.email} value={email} onChange={setEmail} />
        </div>

        <MTextArea
          label={translate.description}
          value={description}
          onChange={setDescription}
          rowsMax={12}
        />
      </section>
      <button className={`latoSemibold2028 ${styles.sendBtn}`}>
        {translate.send}
      </button>
    </div>
  );
};

export default Brief;
