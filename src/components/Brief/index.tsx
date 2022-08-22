import styles from './index.module.scss';

import { FC, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import { useIntl } from 'react-intl';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as Yup from 'yup';

import TagList from '../TagList';
import MInput from '../MInput';
import MTextArea from '../MTextArea';
import AttachFile from '../AttachFile';
import SuccessMessage from '../SuccessMessage';

import translate from '../../i18n/en.json';
import {
  ServicesTypes,
  servicesTypes,
  IndustryTypes,
  industryTypes,
  FrontEndTypes,
  frontEndTypes,
  BackEndTypes,
  backEndTypes,
  MobileTypes,
  mobileTypes,
  TestingTypes,
  testingTypes,
  AdditionalServicesTypes,
  additionalServicesTypes,
} from '../../constants/servicesTypes';

import { sendToEmail } from '../../api/helpers';
import Tag from '../TagList/Tag';

interface IFormValues {
  name: string;
  email: string;
  description: string;
}

const Brief: FC = () => {
  // const intl = useIntl();
  const { control, formState, register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      name: '',
      email: '',
      description: '',
    },
    resolver: yupResolver(
      Yup.object({
        email: Yup.string().email(
          // intl.formatMessage({ defaultMessage: 'Incorrect Email format' })
          'Incorrect Email format'
        ),
      })
    ),
  });

  const { errors, isSubmitting } = formState;

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [isDataSent, setIsDataSent] = useState(false);

  const [isOutsourcing, setIsOutsourcing] = useState(false);

  const [currentServices, setCurrentServices] = useState<ServicesTypes[]>([]);
  const [currentIndustry, setCurrentIndustry] = useState<IndustryTypes[]>([]);
  const [currentFrontEnd, setCurrentFrontEnd] = useState<FrontEndTypes[]>([]);
  const [currentBackEnd, setCurrentBackEnd] = useState<BackEndTypes[]>([]);
  const [currentMobile, setCurrentMobile] = useState<MobileTypes[]>([]);
  const [currentTesting, setCurrentTesting] = useState<TestingTypes[]>([]);
  const [currentAdditionalServices, setCurrentAdditionalServices] = useState<
    AdditionalServicesTypes[]
  >([]);

  const setCurrentTags = (item, setTags) => {
    const index = currentServices.indexOf(item);
    if (index < 0) {
      setTags((prev) => [...prev, item]);
    } else {
      setTags((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1, prev.length),
      ]);
    }
  };

  const getParsedTagList = (currentList, list) => {
    return currentList.length === 0
      ? undefined
      : currentList.map((key) => list[key]).join(', ');
  };

  const onSubmit = async (data) => {
    let services = '';

    if (isOutsourcing) {
      services = `${translate.outsourcing}\n${translate.whatAppOrServices}: ${
        getParsedTagList(currentServices, servicesTypes) || '-'
      }\n${translate.selectIndustry} ${
        getParsedTagList(currentIndustry, industryTypes) || '-'
      }`;
    } else {
      services = `${translate.outstaffing}\n${translate.frontEnd}: ${
        getParsedTagList(currentFrontEnd, frontEndTypes) || '-'
      }\n${translate.backEnd}: ${
        getParsedTagList(currentBackEnd, backEndTypes) || '-'
      }\n${translate.mobile}: ${
        getParsedTagList(currentMobile, mobileTypes) || '-'
      }\n${translate.qATesting}: ${
        getParsedTagList(currentTesting, testingTypes) || '-'
      }\n${translate.additionalServices}: ${
        getParsedTagList(currentAdditionalServices, additionalServicesTypes) ||
        '-'
      }`;
    }

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
            <h2 className="bebasNeue132">{translate.fillBrief}</h2>
            <div className={styles.servicesSwitch}>
              <h5 className="interMedium2432">{translate.whatAppOrServices}</h5>
              <div className={styles.switch}>
                <Tag
                  label={translate.outstaffing}
                  selected={!isOutsourcing}
                  onClick={() => setIsOutsourcing(false)}
                />
                <Tag
                  label={translate.outsourcing}
                  selected={isOutsourcing}
                  onClick={() => setIsOutsourcing(true)}
                />
              </div>
            </div>

            {isOutsourcing ? (
              <section className={styles.outsourcing}>
                <h5 className="interMedium2432">
                  {translate.whatAppOrServices}
                </h5>
                <TagList
                  tagList={servicesTypes}
                  selectedTagList={currentServices}
                  setSelectedTagList={(index) =>
                    setCurrentTags(index, setCurrentServices)
                  }
                />
                <h5 className="interMedium2432">{translate.selectIndustry}</h5>
                <TagList
                  tagList={industryTypes}
                  selectedTagList={currentIndustry}
                  setSelectedTagList={(index) =>
                    setCurrentTags(index, setCurrentIndustry)
                  }
                />
              </section>
            ) : (
              <>
                <section className={styles.outstaffing}>
                  <h5 className="interMedium2432">{translate.frontEnd}</h5>
                  <TagList
                    tagList={frontEndTypes}
                    selectedTagList={currentFrontEnd}
                    setSelectedTagList={(index) =>
                      setCurrentTags(index, setCurrentFrontEnd)
                    }
                  />
                  <h5 className="interMedium2432">{translate.backEnd}</h5>
                  <TagList
                    tagList={backEndTypes}
                    selectedTagList={currentBackEnd}
                    setSelectedTagList={(index) =>
                      setCurrentTags(index, setCurrentBackEnd)
                    }
                  />
                  <h5 className="interMedium2432">{translate.mobile}</h5>
                  <TagList
                    tagList={mobileTypes}
                    selectedTagList={currentMobile}
                    setSelectedTagList={(index) =>
                      setCurrentTags(index, setCurrentMobile)
                    }
                  />
                  <h5 className="interMedium2432">{translate.qATesting}</h5>
                  <TagList
                    tagList={testingTypes}
                    selectedTagList={currentTesting}
                    setSelectedTagList={(index) =>
                      setCurrentTags(index, setCurrentTesting)
                    }
                  />
                </section>
                <section className={styles.additionalServices}>
                  <h5 className="interMedium2432">
                    {translate.additionalServices}
                  </h5>
                  <TagList
                    tagList={additionalServicesTypes}
                    selectedTagList={currentAdditionalServices}
                    setSelectedTagList={(index) =>
                      setCurrentTags(index, setCurrentAdditionalServices)
                    }
                  />
                </section>
              </>
            )}

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
                {/* {errors.email && (
                  <div className="alert alert-danger mt-3 mb-0">
                    {errors.eamil?.message}
                  </div>
                )} */}
              </div>
              {/* <span title={intl.formatDate(date)}></span> */}
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
              <AttachFile
                label={translate.attachFile}
                setFile={onSubmitFile}
                attachedFileName={attachedFile?.name}
              />
            </section>
            <button
              type="submit"
              className={`latoSemibold2028 ${styles.sendBtn}`}
            >
              {translate.send}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Brief;
