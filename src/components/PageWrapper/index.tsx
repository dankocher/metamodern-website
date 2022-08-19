import Header from "../Header";

import Footer from "../Footer";

import { FC } from "react";
import ModalMenu from "../ModalMenu";
import AnimatedBlock from "../AnimatedBlock";
import { animationTypes } from "../../constants/animationTypes";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
 
  return (
    <>
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.2 }} >{children}</motion.div>
      <Footer />
      <ModalMenu />
    </>
  );
};

export default PageWrapper;
