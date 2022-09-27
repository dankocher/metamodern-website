import styles from './index.module.scss';
import { FC } from 'react';

import Image from '../../Image';
import { ProjectProps } from './project.interface';
import { useNavigate } from 'react-router-dom';

import { SCREENS } from '../../../navigation/constants';

const Project: FC<ProjectProps> = ({
  link,
  name,
  title,
  description,
  tags,
  bgImage,
  gradient,
  isDarkContent,
  ...props
}) => {
  const colors = { dark: '#242424', light: '#FFFFFF' };
  const navigate = useNavigate();

  const navigateTo = () => {
    if (Object.values(SCREENS).includes(link as SCREENS) || link === '') {
      navigate(link);
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      {...props}
      className={`${styles.container} noSelect`}
      onClick={navigateTo}
    >
      <div className={styles.aspectRation} />
      <div className={styles.gradient} style={gradient} />

      <Image src={bgImage.x1} images={bgImage} alt={`${name} background`} />

      <div className={styles.content_wrapper}>
        <div
          style={{
            color: isDarkContent ? colors.dark : colors.light,
          }}
          className={styles.content}
        >
          <div className={styles.content__title}>
            <h6 className="interBlack2436">{name}</h6>
            <h6 className="interSemiBold2436">&nbsp;{`- ${title}`}</h6>
          </div>
          <div className={styles.content__tags}>
            {tags.map((tag, index) => (
              <div
                key={`${tag}-${index}`}
                style={{
                  borderColor: isDarkContent ? colors.dark : colors.light,
                }}
              >
                <span className="interMedium1216">{tag}</span>
              </div>
            ))}
          </div>
          <p className="interRegular1216">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
