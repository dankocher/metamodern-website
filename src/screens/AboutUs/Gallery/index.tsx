import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { mainLogo } from '../../../assets/svg/logo';
import { workerCards } from './data';
import { useEffect, useRef, useState } from 'react';
import arrowIcon from '../../../assets/images/arrow.png';
import ArrowCursorButton from './ArrowCursorButton';
import Card from './Card';
import { setDesktopCursorBehavior } from './helper';
import { swipe } from '../../../helper/swipe';

export const dir = {
  LEFT: 'left',
  RIGHT: 'right',
};

const Gallery = ({ isMobile }) => {
  const [mousePosition, setMousePosition] = useState({
    centerX: 0,
    centerY: 0,
  });
  const [card, _setCard] = useState(workerCards[0]);
  const [animatedCard, _setAnimatedCard] = useState(workerCards[0]);
  const [direction, _setDirection] = useState(dir.RIGHT);
  const [disabledBtn, _setDisabledBtn] = useState(false);
  const [animation, _setAnimation] = useState({
    dir: dir.RIGHT,
    started: false,
  });
  const dirRef = useRef(direction);
  const cardRef = useRef(card);
  const animatedCardRef = useRef(animatedCard);
  const animationRef = useRef(animation);
  const disabledBtnRef = useRef(disabledBtn);
  const setDisabledBtn = (disabled) => {
    _setDisabledBtn(disabled);
    disabledBtnRef.current = disabled;
  };
  const setAnimation = (animation) => {
    _setAnimation(animation);
    animationRef.current = animation;
  };
  const setDirection = (direction) => {
    _setDirection(direction);
    dirRef.current = direction;
  };
  const setCard = (card) => {
    _setCard(card);
    cardRef.current = card;
  };

  const setAnimatedCard = (card) => {
    _setAnimatedCard(card);
    animatedCardRef.current = card;
  };
  const cardComponent = useRef(null);
  const cursorButtonRef = useRef(null);
  const animatedCardComponent = useRef(null);
  const regionRef = useRef(null);
  const containerRef = useRef(null);

  function handle() {
    setAnimation({ dir: dirRef.current, started: false });
    document.getElementsByTagName('html')[0].style.overflowY = 'auto';
  }

  const buttonOnClick = () => {
    if (!disabledBtnRef.current) {
      setDisabledBtn(true);
      setAnimation({ dir: dirRef.current, started: true });
      // setTimeout(() => {
      //   setAnimation({ dir: direction, started: false });
      // }, 500);
    }
  };

  useEffect(() => {
    choiceOfBehavior();
    window.onresize = function (event) {
      choiceOfBehavior();
    };
    var myBlock = containerRef.current;
    // элемент
    if (isMobile) {
      // вызов функции swipe с предварительными настройками
      swipe(myBlock, {
        maxTime: 5000,
        minTime: 5,
        maxDist: 150,
        minDist: 2,
      });
      let swipeListener = function (e) {
        let direction = e.detail.dir;
        if (
          (direction === dir.LEFT || direction == dir.RIGHT) &&
          !disabledBtnRef.current
        ) {
          dirRef.current = direction;
          buttonOnClick();
        } 
        // обработка свайпов
      };
      myBlock.addEventListener('swipe', swipeListener);
      return () => {
        if (isMobile) myBlock.removeEventListener('swipe', swipeListener);
      };
    }
  }, []);

  useEffect(() => {
    animatedCardComponent.current?.removeEventListener(
      'transitionend',
      handle,
      false
    );
    if (animation.started)
      animatedCardComponent.current.addEventListener(
        'transitionend',
        handle,
        false
      );
  }, [animation]);

  const choiceOfBehavior = () => {
    if (isMobile || window.innerWidth <= 800) {
      setMobileCursorBehavior();
    } else {
      setDesktopCursorBehavior(
        cursorButtonRef,
        containerRef,
        setDirection,
        regionRef,
        () => {
          buttonOnClick();
        }
      );
    }
  };

  const setMobileCursorBehavior = () => {
    let cursorButton = cursorButtonRef.current;
    cursorButton.style.zIndex = '200';
    containerRef.current.onclick = null;

    cursorButtonRef.current.onclick = () => {
      setDirection(dir.RIGHT);
      buttonOnClick();
    };

    cursorButton.style.right = '2%';
    cursorButton.style.bottom = '15%';
    regionRef.current.onmouseout = null;
    regionRef.current.onmouseover = null;
    regionRef.current.onmousemove = null;
  };

  useEffect(() => {
    if (animation.started) {
      switch (animation.dir) {
        case dir.LEFT:
          setTimeout(() => {
            animatedCardComponent.current.style.transition = '0.5s ease 0s';
            animatedCardComponent.current.style.left = '-100vw';
          }, 50);
          break;
        case dir.RIGHT:
          setTimeout(() => {
            animatedCardComponent.current.style.transition = '0.5s ease 0s';
            animatedCardComponent.current.style.left = '0px';
          }, 50);

          break;
      }
    } else {
      setTimeout(() => {
        animatedCardComponent.current.style.transition = null;
        animatedCardComponent.current.style.left = null;
        setDisabledBtn(false);
      }, 50);
    }
  }, [card, animatedCard]);

  useEffect(() => {
    if (animation.started) {
      let index = 0;

      switch (animation.dir) {
        case dir.LEFT:
          animatedCardComponent.current.style.left = '0px';
          index = cardRef.current.index - 1;
          if (index < 0) index = workerCards.length - 1;
          setCard(workerCards[index]);

          break;
        case dir.RIGHT:
          animatedCardComponent.current.style.left = '-100vw';
          index = cardRef.current.index + 1;
          if (index === workerCards.length) index = 0;
          setAnimatedCard(workerCards[index]);
          break;
      }
    } else {
      switch (animation.dir) {
        case dir.LEFT:
          setAnimatedCard(card);
          break;
        case dir.RIGHT:
          setCard(animatedCard);
          break;
      }
    }
  }, [animation]);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.region} ref={regionRef} />
      <Card card={card} length={workerCards.length} cardRef={cardComponent} />
      <div className={styles.cardWrapper}>
        <Card
          className={styles.animatedCard}
          cardRef={animatedCardComponent}
          card={animatedCardRef.current}
          length={workerCards.length}
        />
      </div>

      <ArrowCursorButton
        disabled={animationRef.current.started}
        mousePosition={mousePosition}
        cursorButtonRef={cursorButtonRef}
        direction={direction}
        isMobile={isMobile}
      />
    </div>
  );
};

export default Gallery;