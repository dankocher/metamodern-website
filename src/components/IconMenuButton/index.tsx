import styles from './index.module.scss';

import { FC, useEffect, useState } from 'react';

import Lottie from 'react-lottie';

import menuIcon from '../../assets/animations/menuIcon.json';
import { useModalMenuContext } from '../../context/useModalMenuContext';

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
    ariaLabel: 'open menu',
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

export default IconMenuButton;
