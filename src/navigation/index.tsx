import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";
import ScrollToTop from "./ScrollToTop";
import Redirect from "./Redirect";

import { SCREENS } from "./constants";

import AboutUs from "../screens/AboutUs";
import ContactsScreen from "../screens/Contacts";
import Home from "../screens/Home";
import PortfolioScreen from "../screens/Portfolio";
import PrivacyMetaModern from "../screens/PrivacyMetaModern";
import ToDScreen from "../screens/TOD";
import ToDPrivacyScreen from "../screens/ToDPrivacy";
import ToDTermsScreen from "../screens/ToDTerms";
import TimeZoScreen from "../screens/TimeZO";
import TimeZoPrivacyScreen from "../screens/TimeZOPrivacy";
import AnimatedBlock from "../components/AnimatedBlock";
import { animationTypes } from "../constants/animationTypes";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";

const Navigation = (props) => {
  const CatDribble =
    "https://dribbble.com/shots/15948449-Relaxiki-Meditation-app";
  const location = useLocation();
  const comparePathnames = () => {
    return [SCREENS.HOME, SCREENS.PORTFOLIO, SCREENS.CONTACTS].some(
      (pathname) => location.pathname === pathname
    );
  };
  return (
    <ScrollToTop>
      <AnimatePresence exitBeforeEnter>
        {comparePathnames() && (
          <AnimatedBlock animation={animationTypes.DOWN}>
            <Header />
          </AnimatedBlock>
        )}

        <Routes key={location.pathname} location={location}>
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
            element={
              <motion.div exit={{ opacity: 0 }}>
                <PrivacyMetaModern />
              </motion.div>
            }
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
          <Route
            path={SCREENS.CALM_CATS}
            element={<Redirect url={CatDribble} />}
          />

          <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
        </Routes>
      </AnimatePresence>
    </ScrollToTop>
  );
};

export default Navigation;
