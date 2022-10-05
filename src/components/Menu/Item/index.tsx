import styles from './index.module.scss';

import { FC, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../navigation/constants';
import StaggerText from '../../StaggerText';

const Item: FC<{ link: SCREENS; title: string }> = ({ link, title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(link);
  };

  const isCurrentPage = location.pathname === link;
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`${styles.container} ${isCurrentPage && styles.selected}`}
      onClick={navigateTo}
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
    >
      <li>
        <StaggerText
          duration={0.3}
          stagger={-0.02}
          text={title}
          disabled={isCurrentPage}
          isHover={isHover}
        />
      </li>
    </div>
  );
};

export default Item;
