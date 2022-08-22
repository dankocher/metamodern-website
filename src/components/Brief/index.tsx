import styles from './index.module.scss';

import { FC, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import TagList from '../TagList';
import MInput from '../MInput';
import MTextArea from '../MTextArea';
import AttachFile from '../AttachFile';
import SuccessMessage from '../SuccessMessage';

import translate from '../../i18n/en.json';
import { ServicesTypes, servicesTypes } from '../../constants/servicesTypes';

import { sendToEmail } from '../../api/helpers';
import AnimatedBlock from '../AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';
import { variables as v } from '../../constants/animationVariables';

interface IFormValues {
  name: string;
  email: string;
  description: string;
}

const Brief: FC = () => {
  const { control, register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
  });

  const [currentServices, setCurrentServices] = useState<ServicesTypes[]>([]);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isDataSent, setIsDataSent] = useState(false);

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

  const onSubmit = async (data) => {
    const services =
      currentServices.length === 0
        ? undefined
        : currentServices.map((s) => servicesTypes[s]).join(', ');
    const brief = JSON.stringify({ ...data, services });

    let request = await sendToEmail(brief, attachedFile);

    if (request.ok) {
      setIsDataSent(true);
    }
  };

  const onSubmitFile = async (file) => {
    if (file == null) {
      setAttachedFile(null);
    } else {
      setAttachedFile(file);
    }
  };

  return (
    <>
      {isDataSent ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.container}>
            <AnimatedBlock
              animation={animationTypes.UP}
              transition={{ duration: v.duration, delay: v.delay }}
            >
              <h2 className='bebasNeue132'>{translate.fillBrief}</h2>
            </AnimatedBlock>
            <AnimatedBlock
              animation={animationTypes.UP}
              transition={{ duration: v.duration, delay: v.delay }}
            >
              <section>
                <h5 className='interMedium2432'>{translate.whatServices}</h5>
                <TagList
                  tagList={servicesTypes}
                  selectedTagList={currentServices}
                  setSelectedTagList={setCurrentServicesHandler}
                />
              </section>
            </AnimatedBlock>
            <AnimatedBlock
              animation={animationTypes.UP}
              transition={{ duration: v.duration, delay: v.delay }}
            >
              <section className={styles.aboutProject}>
                <h5 className='interMedium2432'>
                  {translate.writeAboutProject}
                </h5>
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
                  name='description'
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
                <AttachFile
                  label={translate.attachFile}
                  setFile={onSubmitFile}
                  attachedFileName={attachedFile?.name}
                />
              </section>

              <button
                type='submit'
                className={`latoSemibold2028 ${styles.sendBtn}`}
              >
                {translate.send}
              </button>
            </AnimatedBlock>
          </div>
        </form>
      )}
    </>
  );
};

export default Brief;
