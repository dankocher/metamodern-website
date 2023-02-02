import styles from "./index.module.scss";
// import { Icon } from "../../../components/Icon";
import cardImage1 from "../images/featuresBlock1.png";
import cardImage2 from "../images/featuresBlock2.png";
import cardImage3 from "../images/featuresBlock3.png";
import cardImage4 from "../images/featuresBlock4.png";
import cardImage5 from "../images/featuresBlock5.png";

const cardImages = [cardImage1, cardImage2, cardImage3, cardImage4, cardImage5];

export default ({ spotlight, title, blocks }) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.title} inter6476`}>
        <p className={`${styles.spotlight} inter6476`}>{spotlight}</p> {title}
      </p>
      <div className={styles.block}>
        {blocks.map((blocks, index) => (
          <div id={styles.card}>
            <img src={cardImages[index]} className={styles.card_image} />
            <div className={styles.cardtexts}>
              <p className={`${styles.card_title} inter4052`}>{blocks.title}</p>
              <p className={`${styles.description} inter2028`}>
                {blocks.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
