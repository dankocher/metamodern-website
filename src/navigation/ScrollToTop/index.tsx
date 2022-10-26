import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
// import { ScrollContext } from '../../components/DesktopAppContent';
import { usePrevious } from '../../hooks/usePrevious';
import useHistory from 'react-router-dom';

const ScrollToTop = ({ children, isMobile }) => {
  const location = useLocation();
  // const scrollbarRef = useContext(ScrollContext);
  const prevKey = usePrevious(window.history?.state?.key);
  const [pageOffsets, setPageOffsets] = useState([]);
  const patches = ['/portfolio', '/'];

  useEffect(() => {
    const offset = pageOffsets.find(
      (off) => off.key === window.history?.state?.key
    );
    let indexOffset = null;
    const prevOffset = pageOffsets.find((off, index) => {
      indexOffset = index;
      return off.key === prevKey;
    });
    let y = null;
    setTimeout(() => {
      // if (isMobile || navigator.userAgent.indexOf('Mac') > -1) {
        y = window.pageYOffset;
        if (offset && patches.some((p) => location.pathname === p)) {
          window.scrollTo({ top: offset.y, left: 0 });
        } else {
          window.scrollTo({ top: 0, left: 0 });
        }
      // } else {
      //   y = scrollbarRef.current.scrollbar.offset.y;
      //   if (offset && patches.some((p) => location.pathname === p)) {
      //     scrollbarRef.current.scrollbar.scrollTo(0, offset.y);
      //   } else {
      //     scrollbarRef.current.scrollbar.scrollTo(0, 0);
      //   }
      // }

        if (!prevOffset)
          setPageOffsets((prev) => [...prev, { key: prevKey, y: y }]);
        else {
          setPageOffsets((prev) => {
            prev[indexOffset] = { key: prevKey, y: y };
            return prev;
          });
        }
    }, 200);
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
