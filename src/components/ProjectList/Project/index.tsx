import styles from "./index.module.scss";
import { FC, useEffect, useRef } from "react";

import Image from "../../Image";
import { ProjectProps } from "./project.interface";
import { useNavigate } from "react-router-dom";

import { SCREENS } from "../../../navigation/constants";
import { parallax, parallaxMouseLeave } from "./parallax";




const Project: FC<ProjectProps> = ({
  link,
  name,
  title,
  description,
  tags,
  bgImages,
  gradient,
  isDarkContent,
  ...props
}) => {
  const colors = { dark: "#242424", light: "#FFFFFF" };
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const imgs = useRef([]);
  const navigateTo = () => {
    if (Object.values(SCREENS).includes(link as SCREENS) || link === "") {
      navigate(link);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const parallaxHandler = (e) =>{
    parallax(e, containerRef.current, imgs.current);
  };

  const mouseLeaveHandler = (e) => {
    parallaxMouseLeave(imgs.current);
  }

  useEffect(() => {
    imgs.current  = containerRef.current.querySelectorAll("img");
    containerRef.current.addEventListener("mousemove", parallaxHandler);
    containerRef.current.addEventListener("mouseleave", mouseLeaveHandler);
  }, []);

  return (
    <div
      {...props}
      className={`${styles.container} noSelect`}
      onClick={navigateTo}
      ref = {containerRef}
    >
      <div className={styles.aspectRation} /><div className={styles.gradient} style={gradient} />{
        bgImages.map((bgImage)=>{
          return bgImage.isBgImgWrapper ? (
            <div className={styles.gradient} style={{ overflow: "hidden" }}>
              <Image
                src={bgImage.x1}
                images={bgImage}
                alt={`${name} background`}
                className={styles.img}
              />
            </div>
          ) : (
            <Image
              src={bgImage.x1}
              images={bgImage}
              alt={`${name} background`}
              className={styles.img}
            />
          )
        })
      }
      
      
      <div className={styles.content_wrapper}>
        <div
          style={{
            color: isDarkContent ? colors.dark : colors.light,
          }}
          className={styles.content}
        >
          <div className={styles.content__title}>
            <h6 className="interBlack2436">{name}</h6>
            <h6 className="interSemiBold2436">&nbsp;{`${title}`}</h6>
          </div>
          <div className={styles.content__tags}>
            {tags.map((tag, index) => (
              <div
                key={`${tag}-${index}`}
                className={
                  isDarkContent ? styles.darkBorder : styles.whiteBorder
                }
              >
                <span className="interMedium1216">{tag}</span>
              </div>
            ))}
          </div>
          <p className="interRegular1216">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
