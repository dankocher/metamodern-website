import styles from './index.module.scss';

import { FC, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { SCREENS } from '../../../navigation/constants';
import StaggerText from '../../StaggerText';
import { colors } from '../../../styles/colors';

const Item: FC<{ link: SCREENS; title: string; isWhiteTheme: Boolean }> = ({
  link,
  title,
  isWhiteTheme,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(link);
  };

  const isCurrentPage = location.pathname === link;
  const [isHover, setIsHover] = useState(false);
  const bgColor =
    isCurrentPage && (isWhiteTheme ? colors.white : colors.accentYellow);

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`${styles.container}`}
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
