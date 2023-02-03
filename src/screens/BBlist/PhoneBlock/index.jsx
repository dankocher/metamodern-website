import styles from "./index.module.scss";

import phoneBlock1 from "../images/phoneBlock1.png";
import phoneBlock2 from "../images/phoneBlock2.png";
import phoneBlock1x2 from "../images/phoneBlock1@2x.png";
import phoneBlock2x2 from "../images/phoneBlock2@2x.png";
import Image from "../../../components/Image";

// const phoneBlocks = [phoneBlock1, phoneBlock2];
const phoneBlocks = [
  { x1: phoneBlock1, x2: phoneBlock1x2 },
  { x1: phoneBlock2, x2: phoneBlock2x2 },
];

export default ({ blocks }) => {
  return (
    <div className={styles.container}>
      {blocks.map((blocks, index) => (
        <div className={styles.block}>
          <div className={styles.texts}>
            <p className={`${styles.title} inter6488`}>
              <p className={`${styles.spotlight} inter6488`}>
                {blocks.spotlight}
              </p>
              {blocks.title}
            </p>
            <p className={`${styles.description} inter2436`}>
              {blocks.description}
            </p>
          </div>
          <Image
            src={phoneBlocks[index].x1}
            images={phoneBlocks[index]}
            className={styles.image}
          />
          {/* <img src={phoneBlocks[index]} className={styles.image} /> */}
        </div>
      ))}
    </div>
  );
};
