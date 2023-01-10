import styles from "./index.module.scss";
import { Icon } from "../../../components/Icon";

export default ({ title, tags }) => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        {tags.map((tag, index) => (
          <p className={`${styles.spotlight} sk${index} inter3442`}>{tag}</p>
        ))}
        <p className={`${styles.title} inter112124`}>{title}</p>
        <Icon name="BBlistLogo" className={styles.logo} />
      </div>
    </div>
  );
};
