import styles from "./index.module.scss";

import Image from "../Image";

import img1 from "../../assets/images/truthOrDare.png";
import img2 from "../../assets/images/timeZo.png";

const ProjectList = () => {
  return (
    <div className={styles.container}>
      <Image src={img1} images={null} />
      <Image src={img2} images={null} />
      <Image src={img1} images={null} />
    </div>
  );
};

export default ProjectList;
