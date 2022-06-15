import styles from './index.module.scss';

import { FC, useEffect, useState } from 'react';

import Lottie from 'react-lottie';

import menuIcon from '../../assets/animations/menuIcon.json';
import { useModalMenuContext } from '../../context/useModalMenuContext';
import { SCREENS } from '../../navigation/constants';
import { Link } from 'react-router-dom';

export const IconLink: FC<{
  alt: string;
  icon: string;
  link: SCREENS;
  onClick?: () => void;
}> = ({ alt, icon, link, onClick = () => {} }) => {
  return (
    <Link className={styles.logo} to={link} onClick={onClick}>
      <img alt={alt} src={icon} />
    </Link>
  );
};

export const IconButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  const { isVisible } = useModalMenuContext();
  const [animConfig, setAnimConfig] = useState({
    isStopped: false,
    direction: isVisible ? 1 : -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: menuIcon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    setAnimConfig((prevValue) => ({
      ...prevValue,
      direction: isVisible ? 1 : -1,
    }));
  }, [isVisible]);

  const clickHandler = () => {
    onClick();
  };

  return (
    <button className={styles.menuLogo} onClick={clickHandler}>
      <Lottie
        options={defaultOptions}
        height={'100%'}
        width={'100%'}
        isStopped={animConfig.isStopped}
        direction={animConfig.direction}
        isPaused={false}
      />
    </button>
  );
};
