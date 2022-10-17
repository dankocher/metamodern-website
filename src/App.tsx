import { BrowserRouter } from 'react-router-dom';
import { useDeviceSelectors } from 'react-device-detect';
import axios from 'axios';
import MobileAppContent from './components/MobileAppContent';
import DesktopAppContent from './components/DesktopAppContent';
import { CleanUpContactsProvider } from './context/useIsCleanUpContacts';
import { useEffect } from 'react';
import { colors } from './styles/colors';

axios.defaults.baseURL = process.env.PUBLIC_URL;

function App() {
  const [selectors, data] = useDeviceSelectors(window.navigator.userAgent);
  const { isMobile } = selectors;

  useEffect(() => {
    let bodyHeight = null;
    let textShadow = null;
    let secondBlack = colors.secondBlack;
    const html = document.querySelector('div');
    html.addEventListener('touchstart', (e) => {
      let touches = e.changedTouches;
      for (var i = 0; i < touches.length; i++) {
        let touch = touches[i];
      if (touch.pageX > 20 && touch.pageX < window.innerWidth - 20) return;
      }
      // prevent swipe to navigate gesture
      e.preventDefault();
  });
    if (isMobile) {
      bodyHeight = 'fit-content';
      textShadow = `0 0 0.7px ${secondBlack},`.repeat(4);
      textShadow = textShadow.substring(0, textShadow.length - 1);
    } else {
      bodyHeight = '100%';
      textShadow = `0 0 0.7px ${secondBlack},`.repeat(2);
      textShadow = textShadow.substring(0, textShadow.length - 1);
    }
   
    document.documentElement.style.setProperty('--body-height', bodyHeight);
    document.documentElement.style.setProperty('--textShadow', textShadow);
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
