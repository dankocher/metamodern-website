import styles from "./index.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { animationTypes } from "../../../constants/animationTypes";
import { variables as v } from "../../../constants/animationVariables";
import AnimatedBlock from "../../AnimatedBlock";
import Goo from "gooey-react";
import Drop from "./Drop";
import { getRandomInt } from "../../../helper/random";
import { colors } from "../../../styles/colors";

const GooCircle = ({
  minSizeDrop = 5,
  maxSizeDrop = 80,
  numberOfDrops = 70,
}) => {
  const [drops, setDrops] = useState([]);

  const setConfigDrops = ()=>{
    const winW = window.innerWidth,
    winH = window.innerHeight,
    drops = [];
  for (let i = 0; i < numberOfDrops; i++) {
    let x = getRandomInt(winW) - winW * 0.75;
    let y = getRandomInt(winH) - winH / 2;
    let size = minSizeDrop + getRandomInt(maxSizeDrop - minSizeDrop);
    drops.push({ x, y, size });
  }
  setDrops(drops);
  }

  const onMouseEnter = () => {
    setConfigDrops();
  };

  const onMouseLeave = () => {
    const 
      newDrops = [];
    for (let i = 0; i < numberOfDrops; i++) {
      let x = 0;
      let y = 0
      let size = drops[i].size;
      newDrops.push({ x, y, size });
    }
    setDrops(newDrops);
    // setTimeout(() => {
    //   setDrops([]);
    // }, 2000);
  };

  useEffect(() => {}, []);

  return (
    <AnimatedBlock
      animation={animationTypes.TOLEFT}
      options={{
        className: styles.container_wrapper,
      }}
      transition={{ duration: v.duration + 0.15, delay: v.delay * 3 }}
    >
      <Goo className={styles.container}>
        {drops.map((drop, i) => (
          <Drop size={drop.size} x={drop.x} y={drop.y} key={"key" + i} bgColor={i%2 ? colors.accentYellow : colors.mainBlack}/>
        ))}

        <motion.div
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className={styles.circle}
          whileHover={{ scale: 0.85 }}
          // whileTap={{ scale: 1 }}
          // transition={{
          //   type: "spring",
          //   stiffness: 400,
          //   damping: 17,
          // }}
        ></motion.div>
      </Goo>
    </AnimatedBlock>
  );
};

export default GooCircle;
