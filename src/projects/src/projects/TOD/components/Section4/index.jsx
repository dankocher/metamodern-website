import styles from './index.module.scss';

import Description from '../Description';
import StaticImage from '../../../../components/StaticImage';

import todLayer4 from '../../../../assets/images/todLayer4.png';
import todPhone4 from '../../../../assets/images/todPhone4.png';

const Section4 = ({ header, description }) => (
  <div className={styles.container}>
    <div className={styles.backgroundImg}>
      <StaticImage
        src={todLayer4}
        alt="phone"
        quality={95}
        formats={['AUTO', 'PNG', 'AVIF']}
        placeholder="none"
      />
    </div>

    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.phoneContainer}>
          <StaticImage
            src={todPhone4}
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
);

export default Section4;
