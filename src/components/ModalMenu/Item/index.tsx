import styles from "./index.module.scss";

import { FC } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { SCREENS } from "../../../navigation/constants";

const Item: FC<{ link: SCREENS; title: string }> = ({ link, title }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(link);
  };

  const isCurrentPage = () => location.pathname === link;

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
