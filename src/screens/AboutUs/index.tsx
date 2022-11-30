import styles from './index.module.scss';

import { variables as v } from '../../constants/animationVariables';
import AnimatedBlock from '../../components/AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';
import { motion } from 'framer-motion';

import PageContainer from '../../components/PageTemplate/PageContainer';

import aboutUs from './../../assets/images/aboutUs.png';
import zigzagImage from '../../assets/images/zigzag.png';
import imgPrincip from '../../assets/images/office3.png';
import { principlesList, textBlock1 } from './data';
import translate from '../../i18n/en.json';
import Carousel from './Carousel';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <AnimatedBlock
        animation={animationTypes.UP}
        options={{ className: `${styles.preview} bebasNeue36` }}
      >
        <div className={styles.about_title}>
          <span className={styles.about_title_string}>
            {translate.weSolveProblems}
          </span>
          <span className={styles.about_title_string}>
            <span>{translate.with}&nbsp;</span>
            <span className={styles.zigzag_container}>
              {translate.design}
              <img className={styles.zigzag} src={zigzagImage} />
            </span>
            <span>&nbsp;{translate.and}&nbsp;</span>
            <span className={styles.underline}>{translate.logic}</span>
          </span>
        </div>
      </AnimatedBlock>
      <div className={styles.body}>
        <div className={styles.text_block}>
          <span className={`${styles.text_block_title} interMedium6068`}>
            {textBlock1.subtitle}
          </span>
          <span className={`${styles.text_block_description} interRegular1824`}>
            {textBlock1.description}
          </span>
        </div>
        <Carousel />
        <div className={styles.principlesBlock}>
          <span className={styles.containerImg}>
            <img src={imgPrincip} className={styles.principImg} />
          </span>
          <section className={styles.principles}>
            <span className={`${styles.principTitle} interMedium6068`}>
              Our Principles
            </span>
            {principlesList.map((item) => (
              <div className={styles.princip_text_block}>
                <span
                  className={`${styles.princip_text_title} interMedium4048`}
                >
                  {item.subtitle}
                </span>
                <span
                  className={`${styles.princip_text_description} interRegular2230`}
                >
                  {item.description}
                </span>
              </div>
            ))}
          </section>
        </div>
        <div className={styles.text_block}>
          <span className={`${styles.text_block_title} interMedium6068`}>
            {textBlock1.subtitle}
          </span>
          <span className={`${styles.text_block_description} interRegular1824`}>
            {textBlock1.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
