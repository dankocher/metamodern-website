import styles from './index.module.scss';
import { FC } from 'react';

import Image from '../../Image';
import { ProjectProps } from './project.interface';

const Project: FC<ProjectProps> = ({
  name,
  title,
  description,
  tags,
  bgImage,
  isDarkContent,
  ...props
}) => {
  const colors = { dark: '#242424', light: '#FFFFFF' };

  return (
    <div {...props} className={`${styles.container} noSelect`}>
      <div className={styles.content_wrapper}>
        <div
          style={{ color: isDarkContent ? colors.dark : colors.light }}
          className={styles.content}
        >
          <div className={styles.content__title}>
            <h6 className="interBlack2436">{name}</h6>
            <h6 className="interSemiBold2436">&nbsp;{`- ${title}`}</h6>
          </div>
          <div className={`interMedium1216 ${styles.content__tags}`}>
            {tags.map((tag, index) => (
              <div
                key={`${tag}-${index}`}
                style={{
                  borderColor: isDarkContent ? colors.dark : colors.light,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <p className="interRegular1216">{description}</p>
        </div>
      </div>
      <Image src={bgImage.x1} images={bgImage} alt={`${title} background`} />
    </div>
  );
};

export default Project;
