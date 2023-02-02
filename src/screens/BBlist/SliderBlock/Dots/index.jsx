import { colors } from "../../../../styles/colors";
import styles from "./index.module.scss";

const Dots = ({ buttons, selectedBtnIndex }) => {
  return (
    <div className={styles.container}>
      {buttons.map((button, index) => {
        return (
          <div
          key={index}
            className={styles.dot}
            style={{
              backgroundColor:
                selectedBtnIndex === index ? colors.white : colors.grey,
            }}
          />
        );
      })}
    </div>
  );
};

export default Dots;
