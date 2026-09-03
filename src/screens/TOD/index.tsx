import styles from './index.module.scss';

import { useEffect } from 'react';

import { Layout } from "../../components/layout";
import { colors } from '../../styles/colors';

import data from "./constants/data.json";
import link from "./constants/links.json";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";

const TodPage = () => {
  const sectionList = [
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
  ];

  useEffect(() => {
    const html = window.document.getElementsByTagName('html')[0];
    html.style.backgroundColor = colors.todTheme;

    return () => {
      html.style.removeProperty('background-color');
    };
  }, []);

  return (
    <Layout theme="white">
      <div className={styles.container}>
        {sectionList.map((Section, index) => (

          <Section
            {...data[index]}
            key={index}
            link={
              index === 0 || sectionList.length - 1 === index ? link : undefined
            }
          />
        ))}
      </div>
    </Layout>
  );
};

export default TodPage;