import styles from './index.module.scss';

import TextList from '../TextList';

const Description = ({ header, description }) => {
  return (
    <div className={styles.description}>
      <h2 className={'toDExtraBig'}>{header}</h2>
      <TextList description={description} />
    </div>
  );
};

export default Description;
