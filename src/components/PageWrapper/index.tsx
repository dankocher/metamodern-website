import Header from "../Header";

import Footer from "../Footer";

import { FC } from "react";
import ModalMenu from "../ModalMenu";
import AnimatedBlock from "../AnimatedBlock";
import { animationTypes } from "../../constants/animationTypes";

const PageWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <AnimatedBlock animation={animationTypes.DOWN}>
        <Header />
      </AnimatedBlock>
      {children}
      <Footer />
      <ModalMenu />
    </>
  );
};

export default PageWrapper;
