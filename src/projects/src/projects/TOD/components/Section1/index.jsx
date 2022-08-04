import styles from './index.module.scss';

import StaticImage from '../../../../components/StaticImage';
import LinkButtons from '../../../../components/LinkButtons';
import TextList from '../TextList';
import { Icon } from '../../../../components/Icon';

import todPhone1 from '../../../../assets/images/todPhone1.png';

const Section1 = ({ header, description, link }) => (
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
  </div>
);

export default Section1;
