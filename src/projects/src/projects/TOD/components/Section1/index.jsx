import styles from './index.module.scss';

import StaticImage from '../../../../components/StaticImage';
import LinkButtons from '../../../../components/LinkButtons';
import TextList from '../TextList';
import { Icon } from '../../../../components/Icon';

import todPhone1 from '../../../../assets/images/todPhone1.png';

import { motion } from 'framer-motion';
import { variables as v } from '../../../../../../constants/animationVariables';
import AnimatedBlock from '../../../../../../components/AnimatedBlock';
import { animationTypes } from '../../../../../../constants/animationTypes';


const Section1 = ({ header, description, link }) => (
  // <motion.div
  //   initial={{ opacity: 0, y: v.y }}
  //   whileInView={{ opacity: 1, y: 0 }}
  //   transition={{ duration: v.duration, delay: v.delay }}
  //   viewport={{ once: true }}>
       <AnimatedBlock animation={animationTypes.UP}>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.smWrapper}>
          <div className={styles.leftBlock}>
            <div className={styles.logo}>
              <Icon name="todLogo" size={96} />
            </div>
            <h2 className={`${styles.title} timeZooBigTitle`}>{header}</h2>
            <div className={`${styles.description} subtitle`}>
              <TextList description={description} />
            </div>

            <LinkButtons link={link} />
          </div>
        </div>

        <div className={styles.phoneBlock}>
          <StaticImage
            src={todPhone1}
            alt="phone"
            height={626}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            placeholder="none"
          />

        </div>

      </div>
    </div></AnimatedBlock>
    // </motion.div>
);

export default Section1;
