import styles from "./index.module.scss";

import { useContext, useState } from "react";

import Lottie from "react-lottie";

import ourAppAnimation from "../../assets/animations/ourApp.json";

import underline from "../../assets/svg/bigUnderline.svg";
import translate from "../../i18n/en.json";
import { ScrollContext } from "../../App";

const MainTitle = ({ portfolioRef }) => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollbarRef = useContext(ScrollContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ourAppAnimation,
    ariaLabel: "navigate to our App",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const mainTitleOnClick = () => {
    scrollbarRef.current.scrollbar.scrollIntoView(portfolioRef?.current);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.circle} />
        <h1 className="bebasNeue320 noSelect">{translate.metaModern}</h1>
        <div className={styles.content__subtext}>
          <h2 className="bebasNeue288 noSelect">
            {translate.develop}
            <img className="noSelect" src={underline} />
          </h2>
        </div>
        <span className="latoSemibold2012 noSelect">
          {translate.mainTitleDescription}
        </span>
      </div>
      <button
        className={styles.ourAppBtn}
        onClick={() => mainTitleOnClick()}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Lottie
          options={defaultOptions}
          height={"100%"}
          width={"100%"}
          isStopped={false}
          isPaused={isHovering}
          isClickToPauseDisabled={true}
        />
      </button>
    </div>
  );
};

export default MainTitle;
