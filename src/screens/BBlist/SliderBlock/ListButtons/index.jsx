import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import styles from "./index.module.scss";

const ListButtons = ({ buttons, setSelectedBtnIndex, selectedBtnIndex }) => {
  return (
    <div className={styles.container}>
      {buttons.map((button, index) => {
        return (
          <Button
            key={index}
            icon={button.icon}
            text={button.text}
            index={index}
            isSelected={selectedBtnIndex === index}
            setSelectedBtnIndex={setSelectedBtnIndex}
          />
        );
      })}
    </div>
  );
};

export default ListButtons;
