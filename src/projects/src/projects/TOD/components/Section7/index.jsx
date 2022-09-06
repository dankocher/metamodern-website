import styles from './index.module.scss';

import { Icon } from '../../../../components/Icon';
import StaticImage from '../../../../components/StaticImage';
import LinkButtons from '../../../../components/LinkButtons';

import todPhone7_1 from '../../../../assets/images/todPhone7_1.png';
import todPhone7_2 from '../../../../assets/images/todPhone7_2.png';
import { motion } from 'framer-motion';
import { variables as v } from '../../../../../../constants/animationVariables';

const Section7 = ({ header, description, link }) => (<motion.div

  initial={{ opacity: 0, y: v.y }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: v.duration, delay: 2 * v.delay }}
  viewport={{ once: true }}>
  <div className={styles.container}>
    <div className={styles.contentBlock}>
      <div className={styles.phoneImg}>
        <StaticImage
          src={todPhone7_1}
          alt="phone-left"
          height={640}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          placeholder="none"
        />
      </div>

      <div className={styles.info}>
        <div className={styles.logo}>
          <Icon name="todLogo" size={80} />
        </div>
        <h2 className={`${styles.title} todMedium`}>{header}</h2>
        <span className={`${styles.description} todSubtitleRegular`}>
          {description}
        </span>
        <LinkButtons link={link} />
      </div>

      <div className={styles.phoneImg}>
        <StaticImage
          src={todPhone7_2}
          alt="phone-right"
          height={640}
          quality={95}
          formats={['AUTO', 'WEBP', 'AVIF']}
          placeholder="none"
        />
      </div>
    </div>

  </div ></motion.div>
);

export default Section7;
