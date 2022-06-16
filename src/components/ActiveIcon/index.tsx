import styles from './index.module.scss';

import { FC, useEffect, useState } from 'react';

import Lottie from 'react-lottie';

import menuIcon from '../../assets/animations/menuIcon.json';
import { useModalMenuContext } from '../../context/useModalMenuContext';

export const IconButton: FC<{
  alt: string;
  icon: string;
  onClick?: () => void;
}> = ({ alt, icon, onClick = () => {} }) => {
  return (
    <button className={styles.logo} onClick={onClick}>
      <img alt={alt} src={icon} />
    </button>
  );
};

export const IconMenuButton: FC<{ onClick: () => void }> = ({ onClick }) => {
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
