import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import PageWrapper from "../components/PageWrapper";
import ScrollToTop from "./ScrollToTop";
import Redirect from "./Redirect";

import { SCREENS } from "./constants";

import AboutUs from "../screens/AboutUs";
import ContactsScreen from "../screens/Contacts";
import Home from "../screens/Home";
import PortfolioScreen from "../screens/Portfolio";
import LegalDocumentScreen from "../screens/LegalDocument";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import ModalMenu from "../components/ModalMenu";
import { useEffect } from "react";
import { colors } from "../styles/colors";
import Contractions from "../screens/Contractions";
import Weather from "../screens/Weather";
import WorldClockRedirect from "../screens/TimeZo/redirect";
import TimeZoPage from "../screens/TimeZo";
import TodPage from "../screens/TOD";
import Names from "../screens/Names";

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
          <Route
            path={SCREENS.META_MODERN_PRIVACY}
            element={<LegalDocumentScreen documentId="metaModernPrivacy"/>}
          />

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
          <Route
            path={SCREENS.TOD_PRIVACY}
            element={<LegalDocumentScreen documentId="truthOrDarePrivacy"/>}
          />
          <Route
            path={SCREENS.TOD_TERMS}
            element={<LegalDocumentScreen documentId="truthOrDareTerms"/>}
          />

          {/*   Contractions   */}
          <Route path={SCREENS.CONTRACTIONS} element={<Contractions/>}/>
          <Route
            path={SCREENS.CONTRACTIONS_PRIVACY}
            element={<LegalDocumentScreen documentId="contractionTimerPrivacy"/>}
          />
          <Route
            path={SCREENS.CONTRACTIONS_TERMS}
            element={<LegalDocumentScreen documentId="contractionTimerTerms"/>}
          />

          {/*   Weather App   */}
          <Route path={SCREENS.WEATHER} element={<Weather/>}/>
          <Route
            path={SCREENS.WEATHER_PRIVACY}
            element={<LegalDocumentScreen documentId="weatherPrivacy"/>}
          />
          <Route
            path={SCREENS.WEATHER_TERMS}
            element={<LegalDocumentScreen documentId="weatherTerms"/>}
          />

          {/*   Names App   */}
          <Route path={SCREENS.NAMES} element={<Names/>}/>
          <Route
            path={SCREENS.NAMES_PRIVACY}
            element={<LegalDocumentScreen documentId="bbNamePrivacy"/>}
          />
          <Route
            path={SCREENS.NAMES_TERMS}
            element={<LegalDocumentScreen documentId="bbNameTerms"/>}
          />

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
          <Route
            path={SCREENS.TIME_ZO_PRIVACY}
            element={<LegalDocumentScreen documentId="worldClockPrivacy"/>}
          />
          <Route
            path={SCREENS.WORLD_CLOCK_PRIVACY}
            element={<LegalDocumentScreen documentId="worldClockPrivacy"/>}
          />
          <Route
            path={SCREENS.TIME_ZO_TERMS}
            element={<LegalDocumentScreen documentId="worldClockTerms"/>}
          />
          <Route
            path={SCREENS.WORLD_CLOCK_TERMS}
            element={<LegalDocumentScreen documentId="worldClockTerms"/>}
          />
          <Route path={SCREENS.WORLD_CLOCK_REDIRECT} element={<WorldClockRedirect/>}/>

          <Route path={SCREENS.CALM_CATS} element={<Redirect url={CatDribble}/>}/>

          {/*<Route path={SCREENS.BB_LIST} element={<BBList/>}/>*/}

          <Route
            path={SCREENS.NeverEver_PRIVACY}
            element={<LegalDocumentScreen documentId="didYouEverPrivacy"/>}
          />
          <Route
            path={SCREENS.NeverEver_TERMS}
            element={<LegalDocumentScreen documentId="didYouEverTerms"/>}
          />

          <Route path="*" element={<Navigate to={SCREENS.HOME} replace/>}/>
        </Routes>
      </AnimatePresence>
      <ModalMenu/>
    </ScrollToTop>
  );
};

export default Navigation;
