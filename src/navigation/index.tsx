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
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import ModalMenu from "../components/ModalMenu";
import { useEffect } from "react";
import { colors } from "../styles/colors";
import PrivacyNeverEver from "../screens/PrivacyNeverEver";
import TermsNeverEver from "../screens/TermsNeverEver";
import PrivacyContractions from "../screens/PrivacyContractions";
import TermsContractions from "../screens/TermsContractions";
import Contractions from "../screens/Contractions";
import Weather from "../screens/Weather";
import PrivacyWeather from "../screens/PrivacyWeather";
import TermsWeather from "../screens/TermsWeather";
import WorldClockRedirect from "../screens/TimeZo/redirect";
import TimeZoPage from "../screens/TimeZo";
import TermsWorldClock from "../screens/TermsWorldClock";
import PrivacyWorldClock from "../screens/PrivacyWorldClock";
import PrivacyTOD from "../screens/ToDPrivacy";
import TermsTOD from "../screens/ToDTerms";
import TodPage from "../screens/TOD";

const Navigation = ({ isMobile }) => {
  const CatDribble = "https://dribbble.com/shots/15948449-Relaxiki-Meditation-app";
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

          <Route path={SCREENS.PORTFOLIO} element={<PageWrapper children={<PortfolioScreen/>}/>}/>
          <Route path={SCREENS.ABOUT_US} element={<PageWrapper children={<AboutUs/>}/>}/>
          <Route path={SCREENS.CONTACTS} element={<PageWrapper children={<ContactsScreen/>}/>}/>
          <Route path={SCREENS.META_MODERN_PRIVACY} element={<PrivacyMetaModern/>}/>

          <Route
            path={SCREENS.TOD}
            element={
              <motion.div
                exit={{ opacity: 0 }}
                transition={{
                  duration: duration,
                  transition: { duration: duration },
                }}
              >
                <TodPage/>
              </motion.div>
            }
          />
          <Route path={SCREENS.TOD_PRIVACY} element={<PrivacyTOD/>}/>
          <Route path={SCREENS.TOD_TERMS} element={<TermsTOD/>}/>

          {/*   Contractions   */}
          <Route path={SCREENS.CONTRACTIONS} element={<Contractions/>}/>
          <Route path={SCREENS.CONTRACTIONS_PRIVACY} element={<PrivacyContractions/>}/>
          <Route path={SCREENS.CONTRACTIONS_TERMS} element={<TermsContractions/>}/>

          {/*   Weather App   */}
          <Route path={SCREENS.WEATHER} element={<Weather/>}/>
          <Route path={SCREENS.WEATHER_PRIVACY} element={<PrivacyWeather/>}/>
          <Route path={SCREENS.WEATHER_TERMS} element={<TermsWeather/>}/>

          {/*   TimeZo   */}
          <Route
            path={SCREENS.TIME_ZO}
            element={
              <motion.div
                exit={{ opacity: 0, transition: { duration: duration } }}
                transition={{ duration: duration }}
              >
                <TimeZoPage/>
              </motion.div>
            }
          />
          <Route path={SCREENS.TIME_ZO_PRIVACY} element={<PrivacyWorldClock/>}/>
          <Route path={SCREENS.WORLD_CLOCK_PRIVACY} element={<PrivacyWorldClock/>}/>
          <Route path={SCREENS.TIME_ZO_TERMS} element={<TermsWorldClock/>}/>
          <Route path={SCREENS.WORLD_CLOCK_TERMS} element={<TermsWorldClock/>}/>
          <Route path={SCREENS.WORLD_CLOCK_REDIRECT} element={<WorldClockRedirect/>}/>

          <Route path={SCREENS.CALM_CATS} element={<Redirect url={CatDribble}/>}/>

          {/*<Route path={SCREENS.BB_LIST} element={<BBList/>}/>*/}

          <Route path={SCREENS.NeverEver_PRIVACY} element={<PrivacyNeverEver/>}/>
          <Route path={SCREENS.NeverEver_TERMS} element={<TermsNeverEver/>}/>

          <Route path="*" element={<Navigate to={SCREENS.HOME} replace/>}/>
        </Routes>
      </AnimatePresence>
      <ModalMenu/>
    </ScrollToTop>
  );
};

export default Navigation;
