import { motion } from "framer-motion";
import { animationTypes } from "../../constants/animationTypes";
import { variables as v } from "../../constants/animationVariables";

const downAnimations = {
  initial: { opacity: 0, y: -v.y },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: v.y },
};

const upAnimations = {
  initial: { opacity: 0, y: v.y },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -v.y },
};

const defaultAnimations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const toLeftAnimation = {
  initial: { opacity: 0, x: 2 * v.x },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -2 * v.x },
};

const getAnimations = (animation) => {
  switch (animation) {
    case animationTypes.DOWN:
      return downAnimations;
    case animationTypes.UP:
      return upAnimations;
    case animationTypes.TOLEFT:
      return toLeftAnimation;
    case animationTypes.DEFAULT:
      return defaultAnimations;
  }
};

const AnimatedBlock = ({
  children,
  animation,
  options = {},
  transition = { duration: 1, delay: v.delay },
}) => {
  return (
    <motion.div
      variants={getAnimations(animation)}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={transition}
      {...options}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBlock;
