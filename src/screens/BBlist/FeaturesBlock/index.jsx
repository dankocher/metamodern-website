import styles from "./index.module.scss";
// import { Icon } from "../../../components/Icon";
import cardImage1 from "../images/featuresBlock1.png";
import cardImage2 from "../images/featuresBlock2.png";
import cardImage3 from "../images/featuresBlock3.png";
import cardImage4 from "../images/featuresBlock4.png";
import cardImage5 from "../images/featuresBlock5.png";
import cardImage1x2 from "../images/featuresBlock1@2x.png";
import cardImage2x2 from "../images/featuresBlock2@2x.png";
import cardImage3x2 from "../images/featuresBlock3@2x.png";
import cardImage4x2 from "../images/featuresBlock4@2x.png";
import cardImage5x2 from "../images/featuresBlock5@2x.png";

import Image from "../../../components/Image";

// const cardImages = [cardImage1, cardImage2, cardImage3, cardImage4, cardImage5];
const cardImages = [
  { x1: cardImage1, x2: cardImage1x2 },
  { x1: cardImage2, x2: cardImage2x2 },
  { x1: cardImage3, x2: cardImage3x2 },
  { x1: cardImage4, x2: cardImage4x2 },
  { x1: cardImage5, x2: cardImage5x2 },
];

export default ({ spotlight, title, blocks }) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.title} inter6476`}>
        <p className={`${styles.spotlight} inter6476`}>{spotlight}</p> {title}
      </p>
      <div className={styles.block}>
        {blocks.map((blocks, index) => (
          <div id={styles.card}>
            <Image
              src={cardImages[index].x1}
              images={cardImages[index]}
              className={styles.card_image}
            />
            {/* <img src={cardImages[index]} className={styles.card_image} /> */}
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
