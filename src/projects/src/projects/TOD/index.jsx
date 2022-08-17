import styles from './index.module.scss';

import data from './constants/data.json';
import link from './constants/links.json';

import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';

const TodLanding = () => {
  const sectionList = [
    Section1,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    Section7,
  ];

  return (
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
  );
};

export default TodLanding;
