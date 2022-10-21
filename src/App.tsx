import { BrowserRouter } from 'react-router-dom';
import { useDeviceSelectors } from 'react-device-detect';
import axios from 'axios';
import MobileAppContent from './components/MobileAppContent';
import DesktopAppContent from './components/DesktopAppContent';
import { CleanUpContactsProvider } from './context/useIsCleanUpContacts';
import { useEffect, useState } from 'react';
import { colors } from './styles/colors';
import { init } from './api/helpers';

axios.defaults.baseURL = process.env.PUBLIC_URL;

function App() {
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
  const { isMobile } = selectors;

  useEffect(() => {
    init(selectors, isMobile);
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CleanUpContactsProvider>
        {isMobile ? <MobileAppContent /> : <DesktopAppContent />}
      </CleanUpContactsProvider>
    </BrowserRouter>
  );
}

export default App;
//https://metamodern.dev/
//https://dankocher.github.io/metamodern-website/
