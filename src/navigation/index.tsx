// @ts-nocheck
import { FC, useContext, useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

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
import Header from '../components/Header';
import { AnimatePresence, motion } from 'framer-motion';
import ModalMenu from '../components/ModalMenu';
import { CustomRouter, history } from './CustomRouter';
import { useYScrollContext } from './YScroll';
import { ScrollContext } from '../components/DesctopAppContent';

const Navigation: FC<{
  isMobile: boolean;
}> = ({ isMobile }) => {
  const scrollbarRef = useContext(ScrollContext);
  const { yScroll } = useYScrollContext();
  const location = useLocation();
  const [currHist, setCurrHist] = useState({
    action: '',
    location: {},
    currentKey: '',
  });

  useEffect(() => {
    sessionStorage.setItem('key', location.key);
  }, [location]);

  useEffect(() => {
    return () => {
      sessionStorage.setItem('yvalue', JSON.stringify(yScroll));
    };
  }, [yScroll]);

  useEffect(() => {
    return history.listen(({ location, action }) => {
      if (action === 'POP') {
        const fwdKey = sessionStorage.getItem('key');
        const yscroll = sessionStorage.getItem('yvalue');
        location = {
          ...location,
          state: {
            forward: {
              key: fwdKey,
              yscroll: yscroll,
            },
            ...location.state,
          },
        };
      }
      setCurrHist({
        ...currHist,
        action: action,
        location: {
          ...location,
        },
        currentKey: location.key,
      });
      console.log(action, location.pathname, location.state, location.key);
    });
  }, []);

  return (
    <>
      <ScrollToTop isMobile={isMobile} currHist={currHist}>
        <Header />

        <AnimatePresence exitBeforeEnter>
          <Routes key={location.pathname} location={location}>
            <Route
              path={SCREENS.HOME}
              element={<PageWrapper children={<Home isMobile={isMobile} />} />}
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

            <Route
              path={SCREENS.TOD}
              element={
                <motion.div exit={{ opacity: 0 }}>
                  <ToDScreen />
                </motion.div>
              }
            />
            <Route path={SCREENS.TOD_PRIVACY} element={<ToDPrivacyScreen />} />
            <Route path={SCREENS.TOD_TERMS} element={<ToDTermsScreen />} />

            <Route
              path={SCREENS.TIME_ZO}
              element={
                <motion.div exit={{ opacity: 0 }}>
                  <TimeZoScreen />
                </motion.div>
              }
            />
            <Route
              path={SCREENS.TIME_ZO_PRIVACY}
              element={<TimeZoPrivacyScreen />}
            />

            <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
          </Routes>
        </AnimatePresence>
        <ModalMenu />
      </ScrollToTop>
    </>
  );
};

export default Navigation;
