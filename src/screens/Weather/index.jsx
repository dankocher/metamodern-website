import styles from './index.module.scss';

import { motion } from "framer-motion";
import { variables as v } from "../../constants/animationVariables";

import { Layout } from "../../components/layout";
import Image from "../../components/Image";
import LinkButtons from "../../components/LinkButtons";

const Weather = () => {
  const title = "Weather V"
  const iconName = "weatherLogo"
  const description = "When the sky changes, our numbers do too–fast, clear, and reliably correct."
  const links = { "googlePlay": "https://play.google.com/store/apps/details?id=app.weather.forecast.widget" }

  return (
    <Layout theme="dark">
      <motion.div
        initial={{ opacity: 0, y: v.y }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: v.duration, delay: 2 * v.delay }}
        viewport={{ once: true }}
      >
        <div className={styles.container}>
          <div className={styles.content}>
            <Image
              className={styles.content__logo}
              name={iconName}
              alt={`${title} logo`}
            />

            <h1 className="interBold96104">{title}</h1>
            <div className={`${styles.content__description} mainSubtitle2`}>
              {description}
            </div>

            <LinkButtons link={links} theme="dark"/>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Weather;
