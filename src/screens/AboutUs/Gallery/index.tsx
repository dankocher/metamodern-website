import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { mainLogo } from '../../../assets/svg/logo';
import { workerCards } from './data';
import { useEffect, useRef, useState } from 'react';
import arrowIcon from '../../../assets/images/arrow.png';
import ArrowCursorButton from './ArrowCursorButton';
import Card from './Card';

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
  const [animation, _setAnimation] = useState({
    dir: dir.RIGHT,
    started: false,
  });
  const dirRef = useRef(direction);
  const cardRef = useRef(card);
  const animatedCardRef = useRef(animatedCard);
  const animationRef = useRef(animation);

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

  const cursorButtonRef = useRef(null);
  const animatedCardComponent = useRef(null);
  const regionRef = useRef(null);
  const containerRef = useRef(null);

  const buttonOnClick = () => {
    if (!animationRef.current.started) {
      const direction = dirRef.current;
      let index = 0;
      switch (direction) {
        case dir.LEFT:
          index = cardRef.current.index - 1;
          if (index < 0) index = workerCards.length - 1;
          setCard(workerCards[index]);

          break;
        case dir.RIGHT:
          index = cardRef.current.index + 1;
          if (index === workerCards.length) index = 0;
          setAnimatedCard(workerCards[index]);
          break;
      }
      setAnimation({ dir: direction, started: true });
      setTimeout(() => {
        setAnimation({ dir: direction, started: false });
      }, 500);
    }
  };

  useEffect(() => {
    choiceOfBehavior();
    window.onresize = function (event) {
      choiceOfBehavior();
    };
  }, []);

  const choiceOfBehavior = () => {
    if (isMobile || window.innerWidth <= 800) {
      setMobileCursorBehavior();
    } else {
      setDesktopCursorBehavior();
    }
  };

  const setMobileCursorBehavior = () => {
    let cursorButton = cursorButtonRef.current;
    cursorButton.style.zIndex = '200';
    containerRef.current.onclick = null;

    cursorButtonRef.current.onclick = buttonOnClick;

    cursorButton.style.right = '2%';
    cursorButton.style.bottom = '15%';
    regionRef.current.onmouseout = null;
    regionRef.current.onmouseover = null;
    regionRef.current.onmousemove = null;
  };

  const setDesktopCursorBehavior = () => {
    let cursorButton = cursorButtonRef.current;

    if (!isMobile) {
      cursorButtonRef.current.style.zIndex = null;
      cursorButton.style.right = '-3%';
      cursorButton.style.bottom = '-10%';
      let interval = null;
      containerRef.current.onclick = buttonOnClick;
      const getDirection = (pageX) => {
        if (
          pageX - containerRef.current.offsetLeft + 0 >
          containerRef.current.offsetWidth / 2
        )
          setDirection(dir.RIGHT);
        else setDirection(dir.LEFT);
        regionRef.current.onmouseout = () => {
          setDirection(dir.RIGHT);
          clearInterval(interval);
          containerRef.current.style.cursor = null;
          cursorButton.style.transform = null;
          regionRef.current.onmousemove = null;
          cursorButton.style.width = null;
          cursorButton.style.transition = '0.5s ease 0s';
          cursorButton.style.right = '-3%';
          cursorButton.style.bottom = '-10%';
        };
      };
      function moveAt(e) {
        cursorButton.style.transform = 'scale(0.68)';
        cursorButton.style.right =
          containerRef.current.offsetWidth -
          (e.pageX -
            containerRef.current.offsetLeft +
            cursorButton.offsetWidth / 2) +
          'px';
        cursorButton.style.bottom =
          containerRef.current.offsetHeight -
          (e.pageY -
            containerRef.current.offsetTop +
            cursorButton.offsetHeight / 2) +
          'px';
        getDirection(e.pageX);
      }
      regionRef.current.onmouseover = (event) => {
        cursorButton.style.transition = 'width 0.2s';
        // cursorButton.style.transform = 'scale(1)';

        let mouseX = event.pageX,
          mouseY = event.pageY,
          t = 56,
          tn = 0;
        interval = setInterval(() => {
          let rx =
            mouseX -
            cursorButton.offsetLeft -
            containerRef.current.offsetLeft -
            cursorButton.offsetWidth / 2;
          let ry =
            mouseY -
            cursorButton.offsetTop -
            containerRef.current.offsetTop -
            cursorButton.offsetHeight / 2;
          let vx0 = rx / t,
            vy0 = ry / t,
            Sxn = tn * vx0,
            Syn = tn * vy0;
          tn += 2;
          cursorButton.style.transform = `translate(${Sxn + 'px'}, ${
            Syn + 'px'
          }) scale(${1 - (0.32 * Sxn) / rx})`;
          getDirection(event.pageX);
          if (!(Sxn != rx && Syn != ry)) {
            regionRef.current.onmousemove = (e) => {
              moveAt(e);
            };
            containerRef.current.style.cursor = 'none';
            clearInterval(interval);
          }
        }, 8);
        regionRef.current.onmousemove = (e) => {
          mouseX = e.pageX;
          mouseY = e.pageY;
        };
      };
    }
  };

  useEffect(() => {
    if (animation.started)
      switch (animation.dir) {
        case dir.LEFT:
          animatedCardComponent.current.style.left = '0px';
          setTimeout(() => {
            animatedCardComponent.current.style.transition = '0.5s ease 0s';
            animatedCardComponent.current.style.left = '-100vw';
          }, 1);

          break;
        case dir.RIGHT:
          animatedCardComponent.current.style.left = '-100vw';
          setTimeout(() => {
            animatedCardComponent.current.style.transition = '0.5s ease 0s';
            animatedCardComponent.current.style.left = '0px';
          }, 1);

          break;
      }
    else {
      animatedCardComponent.current.style.transition = null;
      animatedCardComponent.current.style.left = null;
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
    <motion.div ref={containerRef} className={styles.container}>
      <div className={styles.region} ref={regionRef} />
      <Card card={card} length={workerCards.length} />
      <div className={styles.cardWrapper}>
        <Card
          className={styles.animatedCard}
          cardRef={animatedCardComponent}
          card={animatedCard}
          length={workerCards.length}
        />
      </div>

      <ArrowCursorButton
        mousePosition={mousePosition}
        cursorButtonRef={cursorButtonRef}
        direction={direction}
        isMobile={isMobile}
      />
    </motion.div>
  );
};

export default Gallery;
