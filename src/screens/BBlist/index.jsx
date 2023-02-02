import styles from "./index.module.scss";
import Data from "./BBlist_data_en.json";

// import { Layout } from "../../components/layout";

import { motion } from "framer-motion";
import { variables as v } from "../../constants/animationVariables";

import HeaderBanner from "./HeaderBanner";
import TasksBanner from "./TasksBanner";
import FeaturesBlock from "./FeaturesBlock";
import PhoneBlock from "./PhoneBlock";

export default () => {
  return (
    // <Layout theme="dark">
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: v.y }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: v.duration, delay: 2 * v.delay }}
        viewport={{ once: true }}
      >
        <HeaderBanner {...Data.headerBanner} />
        <TasksBanner {...Data.tasksBanner} />
        <FeaturesBlock {...Data.featuresBlock} />
        <PhoneBlock {...Data.phoneBlock} />
      </motion.div>
    </div>
    // </Layout>
  );
};
