import styles from "./index.module.scss";
import { variables as v } from "../../constants/animationVariables";
import AnimatedBlock from "../../components/AnimatedBlock";
import SuccessMessage from "../../components/SuccessMessage";
import PageContainer from "../../components/PageTemplate/PageContainer";
import translate from "../../i18n/en.json";
import { animationTypes } from "../../constants/animationTypes";
import aboutUs from "./../../assets/images/aboutUs.png";
import { motion } from "framer-motion";

const principlesList = [
  {
    subtitle: "System approach",
    description:
      "To create a finished product, we use a systematic approach. This means that as soon as a request for the implementation of your idea comes, we already know the necessary questions on this topic and even partial answers to them.",
  },
  {
    subtitle: "Own libraries",
    description:
      "Thanks to a systematic approach and the use of our own libraries, we easily solve typical problems and pay all our attention to developing the individuality of each idea.",
  },
  {
    subtitle: "Minimal bureaucracy",
    description:
      "For a product launch, it is not the documents that are important, but the information and decisions made. Therefore, we have tried to do everything to keep the number of documents to a minimum, and the information and solutions are only necessary.",
  },
  {
    subtitle: "Flexibility",
    description:
      "The studio has a unique process control algorithm, thanks to it, we can make adjustments at any stage of the project.",
  },
];

const AboutUs = () => {
  return (
    <PageContainer>
      <AnimatedBlock
        animation={animationTypes.DEFAULT}
        options={{ className: styles.about_title }}
      >
        <h2 className={`${styles.about_title_string} bebasNeue36`}>
          {translate.aboutUsTitle.slice(0, 17) + "\n"}
        </h2>
        <h2 className={`${styles.about_title_string} bebasNeue36`}>
          {translate.aboutUsTitle.slice(17)}
        </h2>
      </AnimatedBlock>
      <AnimatedBlock
        animation={animationTypes.UP}
        options={{ className: styles.containerImg }}
      >
        <img className={styles.aboutUsImg} src={aboutUs} />
      </AnimatedBlock>
      <div className={styles.content}>
        <AnimatedBlock animation={animationTypes.UP}>
          <h3 className={`pageSubtitleFont`}>Basic principles of MetaModern</h3>
        </AnimatedBlock>
        <motion.ul className={styles.list}>
          {principlesList.map((item, i) => (
            <motion.li
              className={styles.item}
              initial={{ opacity: 0, y: v.y }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: v.duration, delay: v.delay }}
              viewport={{ once: true }}
            >
              <span className={`${styles.item_subtitle} interRegular2432`}>
                {item.subtitle}
              </span>
              <span className={`${styles.item_description} latoSemibold2214`}>
                {item.description}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </PageContainer>
  );
};

export default AboutUs;
