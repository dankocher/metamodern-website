import styles from './index.module.scss';
import img1 from '../../../assets/images/office1.webp';
import img2 from '../../../assets/images/office2.webp';
import { useEffect, useRef } from 'react';

const images = [img1, img2, img1, img2, img1, img2];

const Carousel = () => {
  const tapeRef = useRef(null);
  const containerRef = useRef(null);

  const scrollXMap = () => {
    const timeline = containerRef.current;

    timeline.onmousedown = () => {
      
      let pageX = 0;

      document.onmousemove = (event) => {
        
        if (pageX !== 0) {
          console.log(timeline.scrollLeft)
          timeline.scrollLeft = timeline.scrollLeft + (pageX - event.pageX);
        }
        
        pageX = event.pageX;
      };

      timeline.onmouseup = () => {
        document.onmousemove = null;
        timeline.onmouseup = null;
      };

      timeline.ondragstart = () => false;
    };
  };
 
useEffect(()=>{
  scrollXMap()
}, [])

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.container}
        ref={containerRef}
      >
        <div className={styles.tape} ref={tapeRef}>
          {images.map((img) => (
            <img className={styles.img} src={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
