import styles from './index.module.scss';
import {motion} from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import arrowIcon from '../../../../assets/images/arrow.png';
import { dir } from '..';

const ArrowCursorButton = ({ cursorButtonRef, direction, isMobile, mousePosition}) => {
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
    <motion.div
    className={styles.container}
    ref={cursorButtonRef}
   
>
 
      <img src={arrowIcon} ref={iconRef} />
   </motion.div>
  );
};

export default ArrowCursorButton;
