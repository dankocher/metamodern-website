import styles from './index.module.scss';

import layer1 from '../../../../assets/images/todLayer2_1.png';
import layer2 from '../../../../assets/images/todLayer2_2.png';
import layer3 from '../../../../assets/images/todLayer2_3.png';

import leftLayer from '../../../../assets/images/todLayer2_4.png';
import rightLayer from '../../../../assets/images/todLayer2_5.png';

import todPhone2 from '../../../../assets/images/todPhone2.png';

import Description from '../Description';

import StaticImage from '../../../../components/StaticImage';
import { motion } from 'framer-motion';
import { animationTypes } from '../../../../../../constants/animationTypes';
import { variables as v } from '../../../../../../constants/animationVariables';
import AnimatedBlock from '../../../../../../components/AnimatedBlock';


const Section2 = ({ header, description }) => (
  <div className={styles.container}>
    <div className={styles.leftBackground}>
      <img src={leftLayer} alt="background1" />
    </div>

    <div className={styles.rightBackground}>
      <img src={rightLayer} alt="background2" />
    </div>
    {/* <motion.div
      initial={{ opacity: 0, y: v.y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: v.duration, delay: v.delay }}
      viewport={{ once: true }}> */}
    <AnimatedBlock animation={animationTypes.UP}>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.phoneContainer}>
            <div className={styles.firstBackground}>
              <img src={layer1} alt="background1" />
            </div>

            <div className={styles.secondBackground}>
              <img src={layer2} alt="background2" />
            </div>

            <div className={styles.thirdBackground}>
              <img src={layer3} alt="background3" />
            </div>

            <StaticImage
              src={todPhone2}
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
    </AnimatedBlock>
    {/* </motion.div> */}
  </div>
);

export default Section2;
