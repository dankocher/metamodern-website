import styles from './index.module.scss';
import { TimelineMax, Power4 } from 'gsap/all';

import { FC, useEffect, useRef } from 'react';

const StaggerText: FC<{
  text: string;
  secondaryClr?: { [key: string]: string };
  duration?: number;
  stagger?: number;
}> = ({
  text,
  duration = 0.3,
  stagger = 0.03,
  secondaryClr = { '--secondary-clr': 'green' },
}) => {
  const ref = useRef(null);
  const wordsArr = text.split(' ');
  const tl = new TimelineMax({ paused: true });

  useEffect(() => {
    const element = ref.current;
    // console.log(element);
    // console.log(characters);

    if (element == null) return;

    const characters = ref?.current?.querySelectorAll(`.${styles.char_inner}`);

    console.log(characters);
    element.animation = tl.staggerTo(
      characters,
      duration,
      {
        y: '-100%',
        ease: Power4.easeOut,
      },
      stagger
    );

    element.addEventListener('mouseenter', (event) =>
      event.currentTarget.animation.play()
    );
    element.addEventListener('mouseout', (_) => element.animation.reverse());

    return () => {
      element.removeEventListener('mouseenter', (event) =>
        event.currentTarget.animation.play()
      );
      element.removeEventListener('mouseout', (_) =>
        element.animation.reverse()
      );
    };
  }, []);

  return (
    <span ref={ref} className={styles.container} style={secondaryClr}>
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
