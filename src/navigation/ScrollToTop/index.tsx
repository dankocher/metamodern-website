import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { ScrollContext } from '../../components/DesktopAppContent';

const ScrollToTop = ({ children, isMobile }) => {
  const location = useLocation();
  const scrollbarRef = useContext(ScrollContext);

  useEffect(() => {
    setTimeout(() => {
      if (isMobile) {
        const body = document.getElementsByTagName('body')[0];
        body.scrollTo(0, 0);
      } else scrollbarRef.current.scrollbar.scrollTo(0, 0);
    }, 200);
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
