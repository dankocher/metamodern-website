import styles from './index.module.scss';

import layer1 from '../../../../assets/images/todLayer3_1.png';
import todLayer3_2 from '../../../../assets/images/todLayer3_2.png';
import todPhone3 from '../../../../assets/images/todPhone3.png';

import StaticImage from '../../../../components/StaticImage';

import Description from '../Description';

import { motion } from 'framer-motion';
import { variables as v } from '../../../../../../constants/animationVariables';
import { animationTypes } from '../../../../../../constants/animationTypes';
import AnimatedBlock from '../../../../../../components/AnimatedBlock';

const Section3 = ({ header, description }) => (
  <div className={styles.container}>
    <div className={styles.page}>

      <div className={styles.content}>
        <StaticImage
          src={todLayer3_2}
          alt="party background"
          quality={95}
          formats={['AUTO', 'PNG', 'AVIF']}
          placeholder="none"
          className={styles.secondBackground}
        />
        <AnimatedBlock animation={animationTypes.UP}
         options={{
          className: `${styles.animateContainer}`,
        }}>
        {/* <motion.div
          className={styles.animateContainer}
          initial={{ opacity: 0, y: v.y }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: v.duration, delay: v.delay }}
          viewport={{ once: true }}> */}
          <div className={styles.phoneContainer}>
            <div className={styles.firstBackground}>
              <img src={layer1} alt="background1" />
            </div>

            <StaticImage
              src={todPhone3}
              alt="phone"
              quality={95}
              formats={['AUTO', 'PNG', 'AVIF']}
              placeholder="none"
              className={styles.phone}
            />
          </div>

          <Description header={header} description={description} />
          </AnimatedBlock>
        {/* </motion.div> */}
      </div>
    </div>
  </div>
);

export default Section3;
