import { BrowserRouter } from 'react-router-dom';
import { useDeviceSelectors } from 'react-device-detect';
import axios from 'axios';
import MobileAppContent from './components/MobileAppContent';
import DesktopAppContent from './components/DesktopAppContent';
import { CleanUpContactsProvider } from './context/useIsCleanUpContacts';
import { useEffect } from 'react';

axios.defaults.baseURL = process.env.PUBLIC_URL;

function App() {
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
  const { isMobile } = selectors;

  useEffect(() => {
    const bodyHeight = isMobile ? 'fit-content' : '100%';

    document.documentElement.style.setProperty(
      '--body-height',
      bodyHeight
    );
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
