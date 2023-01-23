import styles from "./index.module.scss";
// import { Icon } from "../../../components/Icon";
import styled from "styled-components";
import SVG from "react-inlinesvg";
import cardImage1 from "../images/featuresBlock1.svg";
import cardImage2 from "../images/featuresBlock2.svg";
import cardImage3 from "../images/featuresBlock3.svg";
import cardImage4 from "../images/featuresBlock4.svg";
import cardImage5 from "../images/featuresBlock5.svg";

const cardImages = [cardImage1, cardImage2, cardImage3, cardImage4, cardImage5];

// "featuresBlock": {
//   "images": ["Привычки", "Мероприятия"],
//   "titles": ["Привычки", "Мероприятия"],
//   "descriptions": ["Привычки", "Мероприятия"]
// },

// const StyledSVG = styled(SVG)`
//   width: ${({ size }) => size};
//   height: ${({ size }) => size};
//   * {
//     transition: fill 150ms ease;
//     fill: ${({ color }) => color};
//   }
// `;

export default ({ spotlight, title, blocks }) => {
  //import imagesCard from {blocks}

  return (
    <div className={styles.container}>
      <p className={`${styles.title} inter6476`}>
        <p className={`${styles.spotlight} inter6476`}>{spotlight}</p> {title}
      </p>
      <div className={styles.block}>
        {blocks.map((blocks, index) => (
          <div id={styles.card}>
            <img src={cardImages[index]} className={styles.card_image} />

            {/* <img src="./images/featuresBlock1.svg" /> */}
            {/* <img src={require("./images/featuresBlock1.svg")} /> */}
            {/* <img src={`${blocks.image}`} /> */}

            {/* src={blocks.image} */}

            {/* <StyledSVG
              src={testImage}
              width="36"
              height="36"
              className={styles.card_image}
            /> */}
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
