import styles from './index.module.scss';
import img1 from '../../../assets/images/office1.png';
import img2 from '../../../assets/images/office2.png';

const images = [img1, img2, img1, img2, img1, img2];

const Carousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.ribbon}>
          {images.map((img)=><img className={styles.img} src={img}/>)}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
