import styles from './index.module.scss';
import crownImage from '../../assets/images/crown.png';
import { variables as v } from '../../constants/animationVariables';
import AnimatedBlock from '../../components/AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';
import { motion } from 'framer-motion';

import PageContainer from '../../components/PageTemplate/PageContainer';

import aboutUs from './../../assets/images/aboutUs.png';
import zigzagImage from '../../assets/images/zigzag.png';
import imgPrincip from '../../assets/images/office3.webp';
import { principlesList, textBlock1, textBlock2 } from './data';
import translate from '../../i18n/en.json';
import Carousel from './Carousel';
import Gallery from './Gallery';
import { useRef, useEffect } from 'react';

const AboutUs = ({ isMobile }) => {
  const containerRef = useRef(null);

  const setBorderRadius = (scroll) => {
    if (!scroll) {
      containerRef.current.style.borderBottomLeftRadius = '0px';
      containerRef.current.style.borderBottomRightRadius = '0px';
    } else {
      containerRef.current.style.borderBottomLeftRadius = null;
      containerRef.current.style.borderBottomRightRadius = null;
    }
  };

  const scrollListener = (e)=>{
    setBorderRadius(document.documentElement.scrollTop);
  }

  useEffect(() => {
    setBorderRadius(document.documentElement.scrollTop);
    document.addEventListener("scroll", scrollListener)
    // return document.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className={styles.container}>
      <AnimatedBlock
        animation={animationTypes.UP}
        options={{
          className: `${styles.preview} bebasNeue36`,
          ref: containerRef,
        }}
      >
        <div className={styles.about_title}>
          <span className={styles.about_title_string}>
          <img src={crownImage} className={styles.crown} />
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
            {principlesList.map((item, index) => (
              <div className={styles.princip_text_block} key={index}>
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
            {textBlock2.subtitle}
          </span>
          <span className={`${styles.text_block_description} interRegular1824`}>
            {textBlock2.description}
          </span>
        </div>
        <Gallery isMobile={isMobile} />
      </div>
    </div>
  );
};

export default AboutUs;
