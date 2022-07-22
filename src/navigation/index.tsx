import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/Header';
import AboutUs from '../screens/AboutUs';
import ContactsScreen from '../screens/Contacts';
import Home from '../screens/Home';
import PortfolioScreen from '../screens/Portfolio';
import ModalMenu from '../components/ModalMenu';
import Footer from '../components/Footer';
import ScrollToTop from './ScrollToTop';

import { SCREENS } from './constants';

const Navigation = () => {
  return (
    <ScrollToTop>
      <Header />
      <Routes>
        <Route path={SCREENS.HOME} element={<Home />}></Route>
        <Route path={SCREENS.PORTFOLIO} element={<PortfolioScreen />} />
        <Route path={SCREENS.ABOUT_US} element={<AboutUs />} />
        <Route path={SCREENS.CONTACTS} element={<ContactsScreen />} />
        <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
      </Routes>
      <Footer />
      <ModalMenu />
    </ScrollToTop>
  );
};

export default Navigation;
