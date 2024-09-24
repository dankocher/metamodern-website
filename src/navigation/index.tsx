import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";
import ScrollToTop from "./ScrollToTop";
import Redirect from "./Redirect";

import { SCREENS } from "./constants";

import AboutUs from "../screens/AboutUs";
import BBlist from "../screens/BBlist";
import ContactsScreen from "../screens/Contacts";
import Home from "../screens/Home";
import PortfolioScreen from "../screens/Portfolio";
import PrivacyMetaModern from "../screens/PrivacyMetaModern";
import ToDScreen from "../screens/TOD";
import ToDPrivacyScreen from "../screens/ToDPrivacy";
import ToDTermsScreen from "../screens/ToDTerms";
import TimeZoScreen from "../screens/TimeZO";
import TimeZoPrivacyScreen from "../screens/TimeZOPrivacy";
import TimeZoTermsScreen from "../screens/TimeZoTerms";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import ModalMenu from "../components/ModalMenu";
import { useEffect } from "react";
import { colors } from "../styles/colors";

const Navigation = ({ isMobile }) => {
  const CatDribble =
    "https://dribbble.com/shots/15948449-Relaxiki-Meditation-app";
  const location = useLocation();
  const duration = 0.2;

  useEffect(() => {
    if ("scrollRestoration" in window.history && isMobile) {
      // Back off, browser, I got this...
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <ScrollToTop isMobile={isMobile}>
      <Header/>

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route
            path={SCREENS.HOME}
            element={
              <PageWrapper
                children={<Home isMobile={isMobile}/>}
                backgroundColor={colors.accentYellow}
              />
            }
          />

          <Route
            path={SCREENS.PORTFOLIO}
            element={<PageWrapper children={<PortfolioScreen/>}/>}
          />
          <Route
            path={SCREENS.ABOUT_US}

            element={<PageWrapper children={<AboutUs/>}/>}

          />

          <Route
            path={SCREENS.CONTACTS}
            element={<PageWrapper children={<ContactsScreen/>}/>}
          />
          <Route
            path={SCREENS.META_MODERN_PRIVACY}
            element={<PrivacyMetaModern/>}
          />

          <Route
            path={SCREENS.TOD}
            element={
              <motion.div
                exit={{opacity: 0}}
                transition={{
                  duration: duration,
                  transition: {duration: duration},
                }}
              >
                <ToDScreen/>
              </motion.div>
            }
          />
          <Route path={SCREENS.TOD_PRIVACY} element={<ToDPrivacyScreen/>}/>
          <Route path={SCREENS.TOD_TERMS} element={<ToDTermsScreen/>}/>

          <Route
            path={SCREENS.TIME_ZO}
            element={
              <motion.div
                exit={{opacity: 0, transition: {duration: duration}}}
                transition={{duration: duration}}
              >
                <TimeZoScreen/>
              </motion.div>
            }
          />
          <Route
            path={SCREENS.TIME_ZO_PRIVACY}
            element={<TimeZoPrivacyScreen/>}
          />
          <Route
            path={SCREENS.TIME_ZO_TERMS}
            element={<TimeZoTermsScreen/>}
          />
          <Route
            path={SCREENS.CALM_CATS}
            element={<Redirect url={CatDribble}/>}
          />

          <Route path={SCREENS.BB_LIST} element={<BBlist/>}/>

          <Route path="*" element={<Navigate to={SCREENS.HOME} replace/>}/>
        </Routes>
      </AnimatePresence>
      <ModalMenu/>
    </ScrollToTop>
  );
};

export default Navigation;
