import classNames from "classnames";
import { useEffect, useState } from "react";
import { Icon } from "../../../../../components/Icon";
import styles from "./index.module.scss";

const Button = ({ text, icon, index, isSelected, setSelectedBtnIndex }) => {
  let btnClass = classNames(styles.container, {
    [styles.selected]: isSelected,
    [styles.hiddenBtn]: !isSelected,
  });

  const buttonOnClick = () => {
    setSelectedBtnIndex(index);
  };

  return (
    <div className={btnClass} onClick={buttonOnClick}>
      <div className={styles.iconWrapper}>
          <Icon  name={icon + "Filled"} className={`${styles.icon} ${!isSelected && styles.hiddenIcon}`} />
          <Icon  name={icon } className={`${styles.icon} ${isSelected && styles.hiddenIcon}`} />
      </div>
      <div className={`${styles.text} inter3244`}>{text}</div>
    </div>
  );
};

export default Button;
