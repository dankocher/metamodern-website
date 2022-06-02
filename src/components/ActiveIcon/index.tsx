import styles from "./index.module.scss";

import { FC, useState } from "react";

import Lottie from "react-lottie";

import menuIcon from "../../assets/animations/menuIcon.json";

export const IconLink: FC<{ icon: string; onClick: () => void }> = ({
  icon,
  onClick,
}) => {
  return (
    <a className={styles.logo} onClick={onClick}>
      <img src={icon} />
    </a>
  );
};

export const IconButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  const [animConfig, setAnimConfig] = useState({
    isStopped: false,
    direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: menuIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const clickHandler = () => {
    setAnimConfig({ ...animConfig, direction: animConfig.direction * -1 });

    onClick();
  };

  return (
    <button className={styles.menuLogo} onClick={clickHandler}>
      <Lottie
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
        isStopped={animConfig.isStopped}
        direction={animConfig.direction}
        isPaused={false}
      />
    </button>
  );
};
