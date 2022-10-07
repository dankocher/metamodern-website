import styles from './index.module.scss';

import { useContext, useEffect, useState } from 'react';

import Lottie from 'react-lottie';

import ourAppAnimation from '../../assets/animations/ourApp.json';

import underline from '../../assets/svg/bigUnderline.svg';
import translate from '../../i18n/en.json';

import { ScrollContext } from '../DesktopAppContent';

import AnimatedBlock from '../AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';
import { variables as v } from '../../constants/animationVariables';

const MainTitle = ({ portfolioRef, isMobile }) => {
  const [isHovering, setIsHovering] = useState(false);
  const scrollbarRef = useContext(ScrollContext);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ourAppAnimation,
    ariaLabel: 'navigate to our App',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const ourAppBtnOnClick = () => {
    if (isMobile) {
      portfolioRef?.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else scrollbarRef.current.scrollbar.scrollIntoView(portfolioRef?.current);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--block-height',
      // window.innerHeight + 'px'
      document.documentElement.clientHeight + 'px'
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content} translate="no">
        <AnimatedBlock
          animation={animationTypes.TOLEFT}
          options={{ className: styles.circle }}
          transition={{ duration: v.duration + 0.15, delay: v.delay * 3 }}
        > </AnimatedBlock>
        <AnimatedBlock
          animation={animationTypes.DEFAULT}
          options={{
            className: `${styles.metamodern_title} bebasNeue320 noSelect`,
          }}
        >
          {translate.metaModern}
        </AnimatedBlock>
        <div className={styles.content__subtext}>
          <AnimatedBlock
            animation={animationTypes.DEFAULT}
            options={{
              className: `${styles.develop_title} bebasNeue288 noSelect`,
            }}
            transition={{ duration: v.duration + 0.15, delay: v.delay * 3 }}
          >
            {translate.develop}
            <img className="noSelect" src={underline} />
          </AnimatedBlock>
        </div>
        <AnimatedBlock
          animation={animationTypes.DEFAULT}
          options={{
            className: `${styles.description} latoSemibold2012 noSelect`,
          }}
          transition={{ duration: v.duration + 0.15, delay: v.delay * 2 * 3 }}
        >
          {translate.mainTitleDescription}
        </AnimatedBlock>
      </div>
      <AnimatedBlock
        animation={animationTypes.UP}
        options={{
          className: styles.ourAppBtn,
          onClick: () => ourAppBtnOnClick(),
          onMouseEnter: () => setIsHovering(true),
          onMouseLeave: () => setIsHovering(false),
        }}
      >
        <button>
          <Lottie
            options={defaultOptions}
            height={'100%'}
            width={'100%'}
            isStopped={false}
            isPaused={isHovering}
            isClickToPauseDisabled={true}
          />
        </button>
      </AnimatedBlock>
    </div>
  );
};

export default MainTitle;
