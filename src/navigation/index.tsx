import { Routes, Route, Navigate } from 'react-router-dom';

import PageWrapper from '../components/PageWrapper';
import ScrollToTop from './ScrollToTop';

import { SCREENS } from './constants';

import AboutUs from '../screens/AboutUs';
import ContactsScreen from '../screens/Contacts';
import Home from '../screens/Home';
import PortfolioScreen from '../screens/Portfolio';
import PrivacyMetaModern from '../screens/PrivacyMetaModern';
import ToDScreen from '../screens/TOD';
import ToDPrivacyScreen from '../screens/ToDPrivacy';
import ToDTermsScreen from '../screens/ToDTerms';
import TimeZoScreen from '../screens/TimeZO';
import TimeZoPrivacyScreen from '../screens/TimeZOPrivacy';

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
        {/* <Route
          path={SCREENS.ABOUT_US}
          element={<PageWrapper children={<AboutUs />} />}
        /> */}

        <Route
          path={SCREENS.CONTACTS}
          element={<PageWrapper children={<ContactsScreen />} />}
        />
        <Route
          path={SCREENS.META_MODERN_PRIVACY}
          element={<PrivacyMetaModern />}
        />

        <Route path={SCREENS.TOD} element={<ToDScreen />} />
        <Route path={SCREENS.TOD_PRIVACY} element={<ToDPrivacyScreen />} />
        <Route path={SCREENS.TOD_TERMS} element={<ToDTermsScreen />} />

        <Route path={SCREENS.TimeZO} element={<TimeZoScreen />} />
        <Route
          path={SCREENS.TimeZO_PRIVACY}
          element={<TimeZoPrivacyScreen />}
        />

        <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
      </Routes>
    </ScrollToTop>
  );
};

export default Navigation;
