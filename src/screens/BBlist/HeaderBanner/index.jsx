import styles from "./index.module.scss";
import LinkButtons from "../../../components/LinkButtons";
// import { Icon } from "../../../components/Icon";
import logoImg from "../images/bblistlogo.png";

// import React, { useRef } from "react";

export default ({ linePart1, linePart2, spotlight, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.upblock}>
        <div className={styles.block}>
          <p className={`${styles.title} inter5672`}>
            {linePart1}{" "}
            <p className={styles.spotlight}>
              <nobr>{spotlight}</nobr>
            </p>{" "}
            {linePart2}
          </p>
          <div className={styles.linkButtons}>
            <LinkButtons
              link={link}
              theme="dark"
              iconClass={styles.link_icon}
              linkClass={styles.link}
              smallFontClass="smallFont_bblist"
              downFontClass="downFont_bblist"
            />
          </div>
        </div>

        <div>
          <img src={logoImg} className={styles.logo} />
          {/* <Icon name="BBlistLogo" className={styles.logo} /> */}
        </div>
      </div>
    </div>
  );
};
