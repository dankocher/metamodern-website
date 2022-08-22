import Footer from '../Footer';
import { FC } from 'react';
import ModalMenu from '../ModalMenu';
import { motion } from 'framer-motion';

const PageWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <motion.div exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        {children}
      </motion.div>
      <Footer />
      <ModalMenu />
    </>
  );
};

export default PageWrapper;
