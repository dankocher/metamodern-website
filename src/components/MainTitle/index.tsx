import styles from "./index.module.scss";
import translate from "../../i18n/en.json";

import underline from "../../assets/svg/bigUnderline.svg";

const MainTitle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.circle} />
        <h1 className="bebasNeue320">{translate.metaModern}</h1>
        <div className={styles.content__subtext}>
          <h2 className="bebasNeue288">
            {translate.design}
            <img src={underline} />
          </h2>
        </div>
        <span className="latoSemibold2230">
          {translate.mainTitleDescription}
        </span>
      </div>
    </div>
  );
};

export default MainTitle;
