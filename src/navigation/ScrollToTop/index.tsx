import { useContext, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import { ScrollContext } from '../../components/DesctopAppContent/';

const ScrollToTop = ({ children, isMobile, currHist }) => {
  // const location = useLocation();
  const scrollbarRef = useContext(ScrollContext);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isMobile) {
  //       const body = document.getElementsByTagName('body')[0];
  //       body.scrollTo(0, 0);
  //     } else scrollbarRef.current.scrollbar.scrollTo(0, 0);
  //   }, 200);
  // }, [location.pathname]);

  useEffect(() => {
    console.log({ currHist });
  }, [currHist]);

  useLayoutEffect(() => {
    const scrollTo = (x, y) => {
      setTimeout(() => {
        if (isMobile) {
          const body = document.getElementsByTagName('body')[0];
          body.scrollTo(x, y);
        } else {
          console.log(x, y);
          scrollbarRef.current?.scrollbar.scrollTo(x, y);
        }
      }, 200);
    };

    console.log('useLayoutEffect');

    console.log(currHist);

    const { action, location, currentKey } = currHist;
    if (action && action === 'POP') {
      if (location?.state?.hasOwnProperty('forward')) {
        if (currentKey === location.state.forward.key) {
          console.log(`forward ${location.state.forward.yscroll}`);
        }
      } else if (location?.state?.hasOwnProperty('backward')) {
        if (currentKey === location.state.backward.key) {
          console.log('IA ZDES');
          console.log(`backward ${location.state.backward.yscroll}`);
          scrollTo(0, parseFloat(location.state.backward.yscroll));
        }
      } else {
        scrollTo(0, 0);
      }
    } else {
      scrollTo(0, 0);
    }
    // console.log(location);
  }, [currHist]);

  return <>{children}</>;
};

export default ScrollToTop;
