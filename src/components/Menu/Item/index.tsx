import styles from "./index.module.scss";

import { FC, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";

import Lottie from "react-lottie";
import underlineAnimation from "../../../assets/animations/underline.json";
import underline from "../../../assets/svg/underline.svg";

const Item: FC<{ link: SCREENS; title: string }> = ({ link, title }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(link);
  };

  const isCurrentPage = () => location.pathname === link;

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: underlineAnimation,
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
          {isCurrentPage() ? (
            <img src={underline} />
          ) : (
            <Lottie
              options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isStopped={!isHovered}
              isPaused={false}
            />
          )}
        </div>
      </li>
    </div>
  );
};

export default Item;
