import React, { useRef, createContext, useEffect } from 'react';
import Navigation from './navigation';
import { ModalMenuProvider } from './context/useModalMenuContext';
import { BrowserRouter } from 'react-router-dom';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Scrollbar from 'react-smooth-scrollbar';
import { useDeviceSelectors } from 'react-device-detect';
import axios from 'axios';
import MobileAppContent from './components/MobileAppContent/MobileAppContent';
import DesctopAppContent from './components/DesctopAppContent/DesctopAppContent';

axios.defaults.baseURL = process.env.PUBLIC_URL;

function App() {
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
  const { isMobile } = selectors;

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {isMobile ? <MobileAppContent /> : <DesctopAppContent />}
    </BrowserRouter>
  );
}

export default App;
