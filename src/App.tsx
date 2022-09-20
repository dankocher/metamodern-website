import { useDeviceSelectors } from 'react-device-detect';
import axios from 'axios';
import MobileAppContent from './components/MobileAppContent';
import DesctopAppContent from './components/DesctopAppContent';
import { CleanUpContactsProvider } from './context/useIsCleanUpContacts';
import { CustomRouter } from './navigation/CustomRouter';
import { YScrollProvider } from './navigation/YScroll';

axios.defaults.baseURL = process.env.PUBLIC_URL;

function App() {
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
  const { isMobile } = selectors;

  return (
    <CustomRouter basename={process.env.PUBLIC_URL}>
      <YScrollProvider>
        <CleanUpContactsProvider>
          {isMobile ? <MobileAppContent /> : <DesctopAppContent />}
        </CleanUpContactsProvider>
      </YScrollProvider>
    </CustomRouter>
  );
}

export default App;
