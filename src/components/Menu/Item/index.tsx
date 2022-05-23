import styles from "./index.module.scss";

import { FC, useState } from "react";

import { useNavigate } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";

import Lottie from "react-lottie";
import underline from "../../../assets/animations/underline.json";

const Item: FC<{ link: SCREENS; title: string }> = ({ link, title }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(link);
  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: underline,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <li onClick={navigateTo}>
        {title}
        <div className={styles.lottie_wrapper}>
          <Lottie
            options={defaultOptions}
            height={"100%"}
            width={"100%"}
            isStopped={!isHovered}
            // direction={1}
            isPaused={false}
          />
        </div>
      </li>
    </div>
  );
};

export default Item;
