import styles from './index.module.scss';

import { Expo, gsap } from 'gsap/all';

import { FC, useEffect, useRef } from 'react';
import { usePrevious } from '../../hooks/usePrevious';
const StaggerText: FC<{
  text: string;
  disabled?: boolean;
  isHover?: boolean;
  secondaryClr?: string;
  primaryClr?: string;
  duration?: number;
  stagger?: number;
}> = ({
  text,
  duration = 0.3,
  stagger = 0.03,
  secondaryClr = '#242424',
  primaryClr = '#242424',
  disabled = true,
  isHover = false,
}) => {
  const ref = useRef(null);
  const wordsArr = text.split(' ');

  const clrsVar: any = {
    '--secondary-clr': secondaryClr,
    '--primary-clr': primaryClr,
  };

  const prevDisabled = usePrevious(disabled);
  const prevPrevDisabled = usePrevious(prevDisabled);

  const playHandler = (_) => {
    if (disabled) return;
    ref?.current?.animation.play();
  };

  const reverseHandler = (_) => {
    if (disabled) return;
    ref?.current?.animation.reverse();
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
  }, []);

  useEffect(() => {
    if (
      disabled === false &&
      prevPrevDisabled === undefined &&
      prevDisabled === true
    ) {
      ref?.current?.animation.reverse(0);
    }
  }, [disabled]);

  useEffect(() => {
    if (isHover) playHandler(0);
    else reverseHandler(0);
  }, [isHover]);

  useEffect(() => {
    if (!disabled) reverseHandler(0);
  }, [disabled]);

  return (
    <span ref={ref} className={styles.container} style={clrsVar}>
      {wordsArr.map((word, index) => (
        <>
          <span key={`${word}-${index}`} className={styles.word}>
            {word.split('').map((letter, letterIndex) => (
              <span key={`${letter}-${letterIndex}`} className={styles.char}>
                <span className={styles.char_inner} data-letter={letter}>
                  {letter}
                </span>
              </span>
            ))}
          </span>
          <span key={`space-{index}`}> </span>
        </>
      ))}
    </span>
  );
};

export default StaggerText;
