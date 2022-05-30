import styles from "./index.module.scss";

import { FC } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";
import { useModalMenuContext } from "../../../context/useModalMenuContext";

const Item: FC<{ link: SCREENS; title: string }> = ({ link, title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { setIsVisible } = useModalMenuContext();

  const isCurrentPage = () => location.pathname === link;

  const navigateTo = () => {
    if (isCurrentPage()) return;

    setIsVisible(false);
    navigate(link);
  };

  return (
    <li
      className={`${styles.container} ${
        isCurrentPage() ? styles.selected : ""
      }`}
      onClick={navigateTo}
    >
      {title}
    </li>
  );
};

export default Item;
