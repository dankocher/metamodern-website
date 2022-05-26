import styles from "./index.module.scss";

import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../navigation/constants";

export const IconLink: FC<{ icon: string; link: SCREENS }> = ({
  icon,
  link,
}) => {
  const navigate = useNavigate();

  const navigateTo = (path: SCREENS) => {
    navigate(path);
  };

  return (
    <a className={styles.logo} onClick={() => navigateTo(link)}>
      <img src={icon} />
    </a>
  );
};

export const IconButton: FC<{ icon: string; onClick: () => void }> = ({
  icon,
  onClick,
}) => {
  return (
    <button className={styles.menuLogo} onClick={onClick}>
      <img src={icon} />
    </button>
  );
};
