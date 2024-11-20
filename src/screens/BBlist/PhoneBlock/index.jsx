import styles from "./index.module.scss";

import Image from "../../../components/Image";

const phoneBlocks = [
  'phoneBlock1',
  'phoneBlock2',
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
            name={phoneBlocks[index]}
            className={styles.image}
          />
          {/* <img src={phoneBlocks[index]} className={styles.image} /> */}
        </div>
      ))}
    </div>
  );
};
