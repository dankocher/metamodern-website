import styles from "./index.module.scss";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";

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

const createDrops = (bgColor) => {
  return coordDrops.map((coord, i) => {
    let styleEl = {
      ...coord,
      animationDelay: `${getRandom(2)}s`,
      animationDuration: `3s`,
      backgroundColor: bgColor
    };
    return <div className={styles.drop} style={styleEl} key={i} />;
  });
};
const durationCoef = 0.7;

const Drop = ({ size, x, y, key, bgColor }) => {
  const [position, setPosition] = useState({ x: x, y: y });
  const [duration, setDuration] = useState(durationCoef);
  useEffect(() => {
    setPosition({ x: x, y: y });
    if (x !== 0 && y !== 0)
      setDuration(
        ((Math.abs(x) + Math.abs(y)) * durationCoef) /
          window.innerWidth
      );
  }, [x, y]);

  return (
    <motion.li
      key={key}
      transition={{ duration: duration, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      animate={{ x: position.x + "px", y: position.y + "px" }}
      className={styles.container}
      style={{ width: size + "px", height: size + "px" }}
    >
      {createDrops(bgColor)}
    </motion.li>
  );
};

export default Drop;
