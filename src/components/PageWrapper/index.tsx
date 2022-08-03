import Header from '../Header';

import Footer from '../Footer';

import { FC } from 'react';
import ModalMenu from '../ModalMenu';

const PageWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ModalMenu />
    </>
  );
};

export default PageWrapper;
