import { Routes, Route, Navigate } from "react-router-dom";

import Header from "../components/Header";
import AboutUs from "../screens/AboutUs";
import Contacts from "../screens/Contacts";
import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";
import ModalMenu from "../components/ModalMenu";

import { SCREENS } from "./constants";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path={SCREENS.HOME} element={<Home />}></Route>
        <Route path={SCREENS.PORTFOLIO} element={<Portfolio />} />
        <Route path={SCREENS.ABOUT_US} element={<AboutUs />} />
        <Route path={SCREENS.CONTACTS} element={<Contacts />} />
        <Route path="*" element={<Navigate to={SCREENS.HOME} replace />} />
      </Routes>
      <ModalMenu />
      <Header />
    </div>
  );
};

export default Navigation;