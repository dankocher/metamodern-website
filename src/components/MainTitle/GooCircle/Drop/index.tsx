import styles from "./index.module.scss";
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { usePrevious } from "../../../../utils/hooks/usePrevious";
var classNames = require("classnames");

function getRandom(max) {
  return Math.random() * max;
}

const keyPositions = {
  $0: "0",
  $15: "15%",
  $50: "50%",
  $85: "85%",
  $100: "100%",
};

const coordDrops = [
  { top: keyPositions.$0, left: keyPositions.$50 },
  { top: keyPositions.$50, left: keyPositions.$100 },
  { top: keyPositions.$50, left: keyPositions.$0 },
  { top: keyPositions.$100, left: keyPositions.$50 },
  { top: keyPositions.$15, left: keyPositions.$15 },
  { top: keyPositions.$15, left: keyPositions.$85 },
  { top: keyPositions.$85, left: keyPositions.$15 },
  { top: keyPositions.$85, left: keyPositions.$85 },
];

const Parts = ({ bgColor, startAnimation }) => {
  const partClasses = classNames(styles.drop, {
    [styles.stopAnimation]: startAnimation,
  });

  return (
    <>
      {coordDrops.map((coord, i) => {
        let styleEl = {
          ...coord,
          animationDelay: `${-getRandom(2)}s`,
          animationDuration: `3s`,
          backgroundColor: bgColor,
        };
        return <motion.div className={partClasses} style={styleEl} key={i} />;
      })}
    </>
  );
};
const durationCoef = 2;

const getIntermediateY = (pos) => {
  let winW = window.innerWidth,
    winH = window.innerHeight;
  return -Math.abs(((winH - pos.y) * pos.x) / winW) * 1.5;
};

const Drop = ({ size, x, y, key, bgColor }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const controls = useAnimationControls();

  const getDuration = () => {
    return ((Math.abs(x) + Math.abs(y)) * durationCoef) / window.innerWidth;
  };

  const [duration, setDuration] = useState(getDuration());

  const sequence = async () => {
    setIsAnimate(true);
    await controls.start({
      x: x ,
      y: [0, getIntermediateY({ x: x, y: y }), y],
    });
    setIsAnimate(false);
    await controls.start({
      scale: [0.7, 1.3, 1],
    });
  };
  useEffect(() => {
    if (x !== 0 && y !== 0) setDuration(getDuration());
    
  }, [x, y]);

  useEffect(()=>{
    sequence();
  },[duration])

  return (
    <motion.li
      key={key}
      transition={{
        duration: duration,
        y: { ease: ["easeOut", "easeIn"], duration: duration },
        scale:{duration:0.3}
      }}
      animate={controls}
      initial={{scale: 0.7}}
      className={styles.container}
      style={{ width: size + "px", height: size + "px" }}
    >
      <Parts bgColor={bgColor} startAnimation={isAnimate} />
    </motion.li>
  );
};

export default Drop;
