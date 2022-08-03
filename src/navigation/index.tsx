import { Routes, Route, Navigate } from 'react-router-dom';

import AboutUs from '../screens/AboutUs';
import ContactsScreen from '../screens/Contacts';
import Home from '../screens/Home';
import PortfolioScreen from '../screens/Portfolio';
import PrivacyMetaModern from '../screens/PrivacyMetaModern';

import PageWrapper from '../components/PageWrapper';
import ScrollToTop from './ScrollToTop';

import { SCREENS } from './constants';

const Navigation = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route
          path={SCREENS.HOME}
          element={<PageWrapper children={<Home />} />}
        />
        <Route
          path={SCREENS.PORTFOLIO}
          element={<PageWrapper children={<PortfolioScreen />} />}
        />
        <Route
          path={SCREENS.ABOUT_US}
          element={<PageWrapper children={<AboutUs />} />}
        />
        <Route
          path={SCREENS.CONTACTS}
          element={<PageWrapper children={<ContactsScreen />} />}
        />
        <Route
          path={SCREENS.META_MODERN_PRIVACY}
          element={<PrivacyMetaModern />}
        />

        <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Navigation;
