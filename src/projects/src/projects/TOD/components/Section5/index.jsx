import styles from './index.module.scss';

import StaticImage from '../../../../components/StaticImage';
import Description from '../Description';

import todLayer5 from '../../../../assets/images/todLayer5.png';
import todPhone5 from '../../../../assets/images/todPhone5.png';
import { motion } from 'framer-motion';
import { variables as v } from '../../../../../../constants/animationVariables';

const Section5 = ({ header, description }) => (
  <div className={styles.container}>
    <div className={styles.backgroundImg}>
      <StaticImage
        src={todLayer5}
        alt="party background"
        quality={95}
        formats={['AUTO', 'PNG', 'AVIF']}
        placeholder="none"
      />
    </div>
    <motion.div
      initial={{ opacity: 0, y: v.y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: v.duration, delay: 2 * v.delay }}
      viewport={{ once: true }}>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.phoneContainer}>
            <StaticImage
              src={todPhone5}
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
    </motion.div>
  </div>
);

export default Section5;
