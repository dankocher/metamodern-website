import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import soonImg from "../../../assets/images/soon.png";
import Button from "./ListButtons/Button";
import ListButtons from "./ListButtons";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import Dots from "./Dots";

const SliderBlock = ({ title, subtitle, buttons }) => {
  const [selectedBtnIndex, setSelectedBtnIndex] = useState(0);
  const swiperRef = useRef(null);
  const onSlideChange = (e) => {
    setSelectedBtnIndex(e.activeIndex);
  };

  const resizeHandler = () => {
    if (window.innerWidth <= 540) {
      swiperRef.current.allowTouchMove = true;
    } else swiperRef.current.allowTouchMove = false;
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    swiperRef.current?.slideTo(selectedBtnIndex, 0, false);
  }, [selectedBtnIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.list_wrapper}>
          <div className={`${styles.title} inter7296`}>{title}</div>
          <div className={`${styles.subtitle} inter2840`}>{subtitle}</div>
          <ListButtons
            buttons={buttons}
            selectedBtnIndex={selectedBtnIndex}
            setSelectedBtnIndex={setSelectedBtnIndex}
          />
        </div>
        <div className={styles.videoWrapper}>
          <div className={styles.video}>
            <Swiper
              spaceBetween={0}
              effect={"cube"}
              onSlideChange={onSlideChange}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {buttons.map((button) => {
                return (
                  <SwiperSlide>
                    {!button.video ? (
                      <img src={soonImg} className={styles.img_content} />
                    ) : (
                      <video
                        loop
                        autoPlay="autoplay"
                        muted
                        className={styles.video_content}
                      >
                        <source
                          src={button.video}
                          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                        />
                      </video>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <Dots buttons={buttons} selectedBtnIndex={selectedBtnIndex} />
        </div>
      </div>
    </div>
  );
};

export default SliderBlock;
