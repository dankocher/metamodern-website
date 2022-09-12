import Footer from '../Footer';
import { FC, useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import ModalMenu from '../ModalMenu';
import { motion } from 'framer-motion';
import { useModalMenuContext } from '../../context/useModalMenuContext';

const PageWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isVisible } = useModalMenuContext();
  const [duration, setDuration] = useState(0.2);
  const wrapperRef = useRef(null);

  useEffect(() => {
    isVisible ? setDuration(0) : setDuration(0.2);
  }, [isVisible]);

  useEffect(() => {
    if (
      document.documentElement.clientHeight > wrapperRef.current.clientHeight
    ) {
      document.documentElement.style.setProperty(
        '--element-height',
        100 + 'vh'
      );
    }
  }, [document.documentElement.clientHeight]);

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: duration }}
        className={styles.page}
        ref={wrapperRef}
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
};

export default PageWrapper;
