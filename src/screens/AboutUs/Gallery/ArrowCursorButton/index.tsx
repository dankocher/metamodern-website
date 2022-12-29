import styles from './index.module.scss';
import {motion} from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import arrowIcon from '../../../../assets/images/arrow.png';
import { dir } from '..';

const ArrowCursorButton = ({ cursorButtonRef, direction, isMobile, mousePosition, disabled}) => {
  const iconRef = useRef(null);
  useEffect(() => {
    iconRef.current.style.transition = 'transform 0.5s ease 0.15s';
   
  }, []);

  useEffect(() => {
    iconRef.current.style.transition = 'transform 0.3s ease 0s';
    switch(direction){
      case dir.LEFT: iconRef.current.style.transform = 'scale(-1, 1)'; break;
      case dir.RIGHT: iconRef.current.style.transform = 'scale(1, 1)'; break;
    }
  }, [direction]);

  return (
    <button
    className={styles.container}
    ref={cursorButtonRef}
    disabled={disabled}
>
      <img src={arrowIcon} ref={iconRef} />
   </button>
  );
};

export default ArrowCursorButton;
