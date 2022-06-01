import styles from "./index.module.scss";
import { FC } from "react";

import Image from "../../Image";
import { ProjectProps } from "./project.interface";

const Project: FC<ProjectProps> = ({
  title,
  description,
  tags,
  bgImage,
  isDarkContent,
}) => {
  const colors = { dark: "#242424", light: "#FFFFFF" };

  return (
    <div className={styles.container}>
      <div className={styles.content_wrapper}>
        <div
          style={{ color: isDarkContent ? colors.dark : colors.light }}
          className={styles.content}
        >
          <h6>{title}</h6>
          <div className={styles.content__tags}>
            {tags.map((tag) => (
              <div
                style={{
                  borderColor: isDarkContent ? colors.dark : colors.light,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          <p>{description}</p>
        </div>
      </div>
      <Image src={bgImage.x1} images={bgImage} alt={`${title} background`} />
    </div>
  );
};

export default Project;
