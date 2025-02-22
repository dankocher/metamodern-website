import styles from "./index.module.scss";

import { FC, useContext, useEffect, useState } from "react";

import { Controller, useForm } from "react-hook-form";

import { useIsCleanUpContactsContext } from "../../context/useIsCleanUpContacts";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";

import TagList from "../TagList";
import MInput from "../MInput";
import MTextArea from "../MTextArea";
import AttachFile from "../AttachFile";
import SuccessMessage from "../SuccessMessage";
import Tag from "../TagList/Tag";

import translate from "../../i18n/en.json";
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
} from "../../constants/servicesTypes";

import { sendToEmail } from "../../api/helpers";
import AnimatedBlock from "../AnimatedBlock";
import { animationTypes } from "../../constants/animationTypes";
import { variables as v } from "../../constants/animationVariables";
import { isMobile } from "react-device-detect";
import { Ring, Waveform } from "@uiball/loaders";

// import { ScrollContext } from '../DesktopAppContent';

interface IFormValues {
  name: string;
  email: string;
  description: string;
}

const Brief: FC = () => {
  const { control, formState, setValue, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
    resolver: yupResolver(
      Yup.object({
        email: Yup.string().email("E-mail entered incorrectly"),
      })
    ),
  });

  const { isCleanUpContacts, setIsCleanUpContacts } =
    useIsCleanUpContactsContext();

  const { errors } = formState;

  const [attachedFiles, setAttachedFiles] = useState([]);
  const [pending, setPending] = useState(false);
  const [isDataSent, setIsDataSent] = useState(false);

  const [isOutsourcing, setIsOutsourcing] = useState(true);

  const [currentServices, setCurrentServices] = useState<ServicesTypes[]>([]);
  const [currentIndustry, setCurrentIndustry] = useState<IndustryTypes[]>([]);
  const [currentFrontEnd, setCurrentFrontEnd] = useState<FrontEndTypes[]>([]);
  const [currentBackEnd, setCurrentBackEnd] = useState<BackEndTypes[]>([]);
  const [currentMobile, setCurrentMobile] = useState<MobileTypes[]>([]);
  const [currentTesting, setCurrentTesting] = useState<TestingTypes[]>([]);
  const [currentAdditionalServices, setCurrentAdditionalServices] = useState<
    AdditionalServicesTypes[]
  >([]);

  const cleanUpTags = () => {
    setCurrentServices([]);
    setCurrentIndustry([]);
    setCurrentFrontEnd([]);
    setCurrentBackEnd([]);
    setCurrentMobile([]);
    setCurrentTesting([]);
    setCurrentAdditionalServices([]);
  };

  useEffect(() => {
    cleanUpTags();
  }, [isOutsourcing]);

  const setOption = { shouldValidate: true, shouldDirty: true };

  useEffect(() => {
    if (isCleanUpContacts) {
      cleanUpTags();
      setValue("name", "", setOption);
      setValue("email", "", setOption);
      setValue("description", "", setOption);
      onSubmitFiles(null);
      setIsOutsourcing(true);
      setIsCleanUpContacts(false);
    }
  }, [isCleanUpContacts]);

  // const scrollbarRef = useContext(ScrollContext);

  useEffect(() => {
    // if (isMobile || navigator.userAgent.indexOf('Mac') > -1) {
    const body = document.getElementsByTagName("body")[0];
    body.scrollTo(0, 0);
    // } else scrollbarRef.current.scrollbar.scrollTo(0, 0);
  }, [isDataSent]);

  const setCurrentTags = (item, currentList, setTags) => {
    const index = currentList.indexOf(item);

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
      : currentList.map((key) => list[key]).join(", ");
  };

  const onSubmit = async (data) => {
    let services = "";

    if (isOutsourcing) {
      services = `${translate.outsourcing}\n${translate.whatAppOrServices}: ${
        getParsedTagList(currentServices, servicesTypes) || "-"
      }\n${translate.selectIndustry} ${
        getParsedTagList(currentIndustry, industryTypes) || "-"
      }`;
    } else {
      services = `${translate.outstaffing}\n${translate.frontEnd}: ${
        getParsedTagList(currentFrontEnd, frontEndTypes) || "-"
      }\n${translate.backEnd}: ${
        getParsedTagList(currentBackEnd, backEndTypes) || "-"
      }\n${translate.mobile}: ${
        getParsedTagList(currentMobile, mobileTypes) || "-"
      }\n${translate.qATesting}: ${
        getParsedTagList(currentTesting, testingTypes) || "-"
      }\n${translate.additionalServices}: ${
        getParsedTagList(currentAdditionalServices, additionalServicesTypes) ||
        "-"
      }`;
    }

    const brief = JSON.stringify({ ...data, services });
    setPending(true);
    let request = await sendToEmail(brief, attachedFiles);

    if (request.ok) {
      setIsDataSent(true);
      setPending(false);
    }
  };

  const onSubmitFiles = async (files) => {
    if (files.length) {
      const newFiles = [...attachedFiles, ...Object.values(files)].slice(0, 25);
      setAttachedFiles([...newFiles]);
    }
  };

  const removeFile = (event, index) => {
    setAttachedFiles((prevFiles) => prevFiles.filter((f, i) => i !== index));
  };

  useEffect(() => {
    console.log(attachedFiles[0] === attachedFiles[1]);
  }, [attachedFiles.length]);

  return (
    <AnimatedBlock
      animation={animationTypes.UP}
      transition={{ duration: v.duration, delay: v.delay }}
    >
      {isDataSent ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.container}>
            <h2 className="bebasNeue132">{translate.fillBrief}</h2>
            <div className={styles.servicesSwitch}>
              <h5 className="interMedium2432">{translate.whatServices}</h5>
              <div className={styles.switch}>
                <Tag
                  label={translate.outsourcing}
                  selected={isOutsourcing}
                  onClick={() => setIsOutsourcing(true)}
                />
                <Tag
                  label={translate.outstaffing}
                  selected={!isOutsourcing}
                  onClick={() => setIsOutsourcing(false)}
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
                    setCurrentTags(index, currentServices, setCurrentServices)
                  }
                />
                <h5 className="interMedium2432">{translate.selectIndustry}</h5>
                <TagList
                  tagList={industryTypes}
                  selectedTagList={currentIndustry}
                  setSelectedTagList={(index) =>
                    setCurrentTags(index, currentIndustry, setCurrentIndustry)
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
                      setCurrentTags(index, currentFrontEnd, setCurrentFrontEnd)
                    }
                  />
                  <h5 className="interMedium2432">{translate.backEnd}</h5>
                  <TagList
                    tagList={backEndTypes}
                    selectedTagList={currentBackEnd}
                    setSelectedTagList={(index) =>
                      setCurrentTags(index, currentBackEnd, setCurrentBackEnd)
                    }
                  />
                  <h5 className="interMedium2432">{translate.mobile}</h5>
                  <TagList
                    tagList={mobileTypes}
                    selectedTagList={currentMobile}
                    setSelectedTagList={(index) =>
                      setCurrentTags(index, currentMobile, setCurrentMobile)
                    }
                  />
                  <h5 className="interMedium2432">{translate.qATesting}</h5>
                  <TagList
                    tagList={testingTypes}
                    selectedTagList={currentTesting}
                    setSelectedTagList={(index) =>
                      setCurrentTags(index, currentTesting, setCurrentTesting)
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
                      setCurrentTags(
                        index,
                        currentAdditionalServices,
                        setCurrentAdditionalServices
                      )
                    }
                  />
                </section>
              </>
            )}

            <section className={styles.aboutProject}>
              <h5 className="interMedium2432">{translate.writeAboutProject}</h5>
              <div className={styles.personalInformation}>
                <section>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <MInput
                        label={translate.name}
                        onChange={onChange}
                        value={value}
                        required={true}
                      />
                    )}
                  />
                  <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <MInput
                        label={translate.email}
                        onChange={onChange}
                        value={value}
                        required={true}
                        error={errors.email ? errors.email.message : null}
                      />
                    )}
                  />
                </section>
                <Controller
                  name="description"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <MTextArea
                      label={translate.description + "*"}
                      onChange={onChange}
                      value={value}
                      rowsMax={12}
                    />
                  )}
                />
                <AttachFile
                  label={translate.attachFile}
                  setFiles={onSubmitFiles}
                  removeFile={removeFile}
                  attachedFileNames={attachedFiles.map((f) => f?.name)}
                />
              </div>
            </section>
            <button
              type="submit"
              className={`latoSemibold2028 ${styles.sendBtn}`}
            >
              {pending ? <Ring size={28} /> : translate.submit}
            </button>
          </div>
        </form>
      )}
    </AnimatedBlock>
  );
};

export default Brief;
