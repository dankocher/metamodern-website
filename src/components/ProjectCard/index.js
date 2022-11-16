import styles from './styles.module.scss';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Icon } from '../Icon';

import { colors } from '../../styles/colors';

const Card = styled(Link)`
  background-color: ${({ background }) => background};
  color: ${({ color }) => (color === 'light' ? colors.white : colors.main)};

  @media (hover: hover) and (pointer: fine) {
    &:hover .${styles.button} {
      color: ${({ color }) => (color === 'light' ? colors.main : colors.white)};
      background-color: ${({ color }) =>
        color === 'light' ? colors.white : colors.main};
    }
  }

  .${styles.button} {
    color: ${({ color }) => (color === 'light' ? colors.white : colors.main)};
    border-color: ${({ color }) =>
      color === 'light' ? colors.white : colors.main};
  }

  .${styles.soon} {
    color: ${({ color }) => (color === 'light' ? colors.main : colors.white)};
    background-color: ${({ color }) =>
      color === 'light' ? colors.white : colors.main};
  }
`;

const ProjectCard = ({
  logoIcon,
  name,
  description,
  url,
  background,
  color,
  links,
}) => {
  return (
    <Card
      to={url}
      className={styles.card}
      background={background}
      color={color}
    >
      <div className={styles.header}>
        <div className={styles.logo}>
          <Icon name={logoIcon} size={64} />
        </div>

        {Object.keys(links).length !== 0 ? (
          <div className={styles.links}>
            <Icon
              name="apple"
              size={20}
              color={color === 'light' ? colors.white : colors.main}
            />
            <Icon
              name="android"
              size={20}
              color={color === 'light' ? colors.white : colors.main}
            />
          </div>
        ) : (
          <div className={`${styles.soon} fontSoon`}>soon</div>
        )}
      </div>

      <h2 className={`${styles.name} mainSubtitle`}>{name}</h2>
      <p className={`${styles.description} mainSubtitle3`}>{description}</p>
      <div className={`${styles.button} mainSubtitle1`}>view more</div>
    </Card>
  );
};

export default ProjectCard;
