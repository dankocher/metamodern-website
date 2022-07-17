import styles from './index.module.scss';

import { FC, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import TagList from '../TagList';
import MInput from '../MInput';
import MTextArea from '../MTextArea';

import translate from '../../i18n/en.json';
import { ServicesTypes, servicesTypes } from '../../constants/servicesTypes';

interface IFormValues {
  currentServices: ServicesTypes[];
  name: string;
  email: string;
  description: string;
}

const Brief: FC = () => {
  const { control, register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      currentServices: [],
      name: '',
      email: '',
      description: '',
    },
  });

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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <MInput
              label={translate.yourName}
              required={true}
              {...register('name', { required: true })}
            />
            <MInput
              label={translate.email}
              required={true}
              {...register('email', { required: true })}
            />
          </div>
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => (
              <MTextArea
                label={translate.description}
                onChange={onChange}
                value={value}
                rowsMax={12}
              />
            )}
          />
        </section>
        <button type="submit" className={`latoSemibold2028 ${styles.sendBtn}`}>
          {translate.send}
        </button>
      </div>
    </form>
  );
};

export default Brief;
