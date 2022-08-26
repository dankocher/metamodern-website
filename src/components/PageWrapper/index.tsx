import Footer from '../Footer';
import { FC, useEffect, useState } from 'react';
import ModalMenu from '../ModalMenu';
import { motion } from 'framer-motion';
import { useModalMenuContext } from '../../context/useModalMenuContext';

const PageWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isVisible } = useModalMenuContext();
  const [duration, setDuration] = useState(0.2);

  useEffect(() => {
    isVisible ? setDuration(0) : setDuration(0.2);
  }, [isVisible]);

  return (
    <>
      <motion.div exit={{ opacity: 0 }} transition={{ duration: duration }} style={{position: "relative"}}>
        {children}
        <Footer />
      </motion.div>
    </>
  );
};

export default PageWrapper;
