import { BrowserRouter } from 'react-router-dom';
import { useDeviceSelectors } from 'react-device-detect';
import axios from 'axios';
import MobileAppContent from './components/MobileAppContent/MobileAppContent';
import DesctopAppContent from './components/DesctopAppContent/DesctopAppContent';
import { CleanUpContactsProvider } from './context/useIsCleanUpContacts';
import { useEffect } from 'react';

axios.defaults.baseURL = process.env.PUBLIC_URL;

function App() {
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
  const { isMobile } = selectors;

  useEffect(() => {
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CleanUpContactsProvider>
        {isMobile ? <MobileAppContent /> : <DesctopAppContent />}
      </CleanUpContactsProvider>
    </BrowserRouter>
  );
}

export default App;
