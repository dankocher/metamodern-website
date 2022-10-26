import styles from './styles.module.scss';

import { Icon } from '../../../components/Icon';
import StaticImage from '../../../components/StaticImage';

import timeZo_phone_1 from '../../../assets/images/TimeZo-phone-1.png';
import timeZo_phone_2 from '../../../assets/images/TimeZo-phone-2.png';
import timeZo_phone_3 from '../../../assets/images/TimeZo-phone-3.png';
import { motion } from 'framer-motion';
import { variables as v } from '../../../../../constants/animationVariables';
import classNames from 'classnames';

const Section = ({ id, advantage }) => {
  const circleStyle = (id) =>
    classNames(styles.circle, {
      [styles.circleOne]: id === '1',
      [styles.circleTwo]: id === '2',
      [styles.circleThree]: id === '3',
    });

  return (
    // <motion.div
    //   className={styles.containerSection}
    //   initial={{ opacity: 0, y: v.y }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: v.duration, delay: v.delay }}
    //   viewport={{ once: true }}
    // >
    <div className={styles.containerSection}>
      <div className={styles.page}>
        <div className={styles.phone__block}>
          <div className={styles.advantage}>
            {advantage.map(({ icon, title, text }) => (
              <div key={icon} className={styles.advantage__item}>
                <Icon name={icon} size={48} />
                <p className="title1">{title}</p>
                <p className="subtitleSmall">{text}</p>
              </div>
            ))}
          </div>

          <div className={styles.phoneImg}>
            <span className={circleStyle(id)} />
            {id === '1' && (
              <StaticImage
                className={styles.phone}
                src={timeZo_phone_1}
                alt="phone"
                height={604}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="none"
              />
            )}
            {id === '2' && (
              <StaticImage
                className={styles.phone}
                src={timeZo_phone_2}
                alt="phone"
                height={604}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="none"
              />
            )}
            {id === '3' && (
              <StaticImage
                className={styles.phone}
                src={timeZo_phone_3}
                alt="phone"
                height={604}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                placeholder="none"
              />
            )}
          </div>
        </div>
      </div>
    </div>
    // </motion.div>
  );
};

export default Section;
