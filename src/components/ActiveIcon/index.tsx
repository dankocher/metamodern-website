import styles from "./index.module.scss";

import { FC } from "react";

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
