import styles from './index.module.scss';

import { Expo, gsap } from 'gsap/all';

import { FC, useEffect, useRef } from 'react';

const StaggerText: FC<{
  text: string;
  secondaryClr?: string;
  primaryClr?: string;
  duration?: number;
  stagger?: number;
}> = ({
  text,
  duration = 0.3,
  stagger = 0.03,
  secondaryClr = '#A6A6A6',
  primaryClr = '#242424',
}) => {
  const ref = useRef(null);
  const wordsArr = text.split(' ');

  const clrsVar: any = {
    '--secondary-clr': secondaryClr,
    '--primary-clr': primaryClr,
  };

  useEffect(() => {
    const element = ref.current;

    if (element == null) return;

    const tl = gsap.timeline({ paused: true });

    const characters = element.querySelectorAll(`.${styles.char_inner}`);

    element.animation = tl.to(characters, {
      duration,
      y: '-100%',
      ease: Expo.inOut,
      stagger,
    });

    const playHandler = (event) => {
      event.currentTarget.animation.play();
    };

    const reverseHandler = (_) => {
      element.animation.reverse();
    };

    element.addEventListener('mouseenter', playHandler);
    element.addEventListener('mouseout', reverseHandler);

    return () => {
      element.removeEventListener('mouseenter', playHandler);
      element.removeEventListener('mouseout', reverseHandler);
    };
  }, []);

  return (
    <span ref={ref} className={styles.container} style={clrsVar}>
      {wordsArr.map((word, index) => (
        <span key={`${word}-${index}`} className={styles.word}>
          {word.split('').map((letter, letterIndex) => (
            <span key={`${letter}-${letterIndex}`} className={styles.char}>
              <span className={styles.char_inner} data-letter={letter}>
                {letter}
              </span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

export default StaggerText;
