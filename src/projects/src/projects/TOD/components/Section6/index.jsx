import styles from './index.module.scss';

import Description from '../Description';
import StaticImage from '../../../../components/StaticImage';

import layer1 from '../../../../assets/images/todLayer6_1.png';
import layer2 from '../../../../assets/images/todLayer6_2.png';
import todPhone6 from '../../../../assets/images/todPhone6.png';
import { motion } from 'framer-motion';
import { variables as v } from '../../../../../../constants/animationVariables';

const Section6 = ({ header, description }) => (
  <div className={styles.container}>
    <div className={styles.firstBackground}>
      <img src={layer1} alt="background1" />
    </div>

    <div className={styles.secondBackground}>
      <img src={layer2} alt="background2" />
    </div>
    {/* <motion.div
      initial={{ opacity: 0, y: v.y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: v.duration, delay: v.delay }}
      viewport={{ once: true }}> */}
    <div>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.phoneContainer}>
            <StaticImage
              src={todPhone6}
              alt="phone"
              quality={95}
              formats={['AUTO', 'PNG', 'AVIF']}
              placeholder="none"
              className={styles.phone}
            />
          </div>

          <Description header={header} description={description} />
        </div>
      </div>
    </div>
    {/* </motion.div> */}
  </div>
);

export default Section6;
