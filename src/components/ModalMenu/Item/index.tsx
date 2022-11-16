import styles from './index.module.scss';

import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { useIsPage } from '../../../utils/hooks/useIsPage';
import { useModalMenuContext } from '../../../context/useModalMenuContext';

import { SCREENS } from '../../../navigation/constants';

const Item: FC<{ link: SCREENS; title: string }> = ({ link, title }) => {
  const navigate = useNavigate();

  const isCurrentPage = useIsPage(link);

  const { setIsVisible } = useModalMenuContext();

  const navigateTo = () => {
    setIsVisible(false);

    if (isCurrentPage) return;

    navigate(link);
  };

  return (
    <li
      className={`${styles.container} ${isCurrentPage ? styles.selected : ''}`}
      onClick={navigateTo}
    >
      {title}
    </li>
  );
};

export default Item;
