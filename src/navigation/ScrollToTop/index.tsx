import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ScrollContext } from '../../components/DesktopAppContent';

const ScrollToTop = ({ children, isMobile }) => {
  const location = useLocation();
  const scrollbarRef = useContext(ScrollContext);

  useEffect(() => {
    setTimeout(() => {
      if (isMobile) {
        const html = document.querySelector('html');
        
        html.scrollTo({top: 0, left: 0,});
      } else scrollbarRef.current.scrollbar.scrollTo(0, 0);
    }, 200);
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
