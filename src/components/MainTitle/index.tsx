import styles from './index.module.scss';

import { useState } from 'react';

import Lottie from 'react-lottie';

import ourAppAnimation from '../../assets/animations/ourApp.json';

import underline from '../../assets/svg/bigUnderline.svg';
import translate from '../../i18n/en.json';

const MainTitle = ({ portfolioRef }) => {
  const [isHovering, setIsHovering] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ourAppAnimation,
    ariaLabel: 'navigate to our App',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.circle} />
        <h1 className="bebasNeue320 noSelect">{translate.metaModern}</h1>
        <div className={styles.content__subtext}>
          <h2 className="bebasNeue288 noSelect">
            {translate.develop}
            <img className="noSelect" src={underline} />
          </h2>
        </div>
        <span className="latoSemibold2012 noSelect">
          {translate.mainTitleDescription}
        </span>
      </div>
      <button
        className={styles.ourAppBtn}
        onClick={() =>
          portfolioRef?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Lottie
          options={defaultOptions}
          height={'100%'}
          width={'100%'}
          isStopped={false}
          isPaused={isHovering}
          isClickToPauseDisabled={true}
        />
      </button>
    </div>
  );
};

export default MainTitle;
