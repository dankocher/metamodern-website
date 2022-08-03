import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];
    body.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
