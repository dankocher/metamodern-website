import styles from './index.module.scss';
import { mainLogo } from '../../../../assets/svg/logo';
import { useEffect, useRef, useState } from 'react';

const Card = ({ card, length, className = '', cardRef = null }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`} ref={cardRef}>
      <div className={styles.logo}>{mainLogo}</div>
      <div className={styles.info}>
        <div className={styles.workerInfo}>
          <span className={`${styles.name} interMedium5268`}>{card.name}</span>
          <span className={`${styles.position} interMedium4056`}>
            {card.position}
          </span>
        </div>
        <span className={`${styles.numbering} interMedium96128`}>
          {card.index + 1}/{length}
        </span>
      </div>

      <span className={styles.photo}>
        <img src={card.photo} />
      </span>
    </div>
  );
};

export default Card;
