import styles from "./index.module.scss";

import Image from "../../../components/Image";

const cardImages = [
  'featuresBlock1',
  'featuresBlock2',
  'featuresBlock3',
  'featuresBlock4',
  'featuresBlock5',
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
              name={cardImages[index]}
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
