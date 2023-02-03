import Footer from '../Footer';
import { FC, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { useModalMenuContext } from '../../context/useModalMenuContext';

const PageWrapper: FC<{
  children: React.ReactNode;
  backgroundColor?: string;
}> = ({ children, backgroundColor }) => {
  const { isVisible } = useModalMenuContext();
  const [duration, setDuration] = useState(0.2);
  const wrapperRef = useRef(null);
  useEffect(() => {
    isVisible ? setDuration(0) : setDuration(0.2);
  }, [isVisible]);

  useEffect(() => {
    if (
      document.documentElement.clientHeight > wrapperRef.current.scrollHeight
    ) {
      document.documentElement.style.setProperty(
        '--element-height',
        'calc(100vh - 148px)'
      );
    } else {
      document.documentElement.style.setProperty(
        '--element-height',
        'fit-content'
      );
    }
  }, [wrapperRef.current?.scrollHeight]);

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: duration }}
        className={styles.page}
        ref={wrapperRef}
      >
        {children}
        <Footer backgroundColor={backgroundColor} />
      </motion.div>
      
    </>
  );
};

export default PageWrapper;
