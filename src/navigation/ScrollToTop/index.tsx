import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { ScrollContext } from "../../App";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const scrollbarRef = useContext(ScrollContext);

  useEffect(() => {
    setTimeout(() => {
      scrollbarRef.current.scrollbar.scrollTo(0, 0);
    }, 200);
  }, [location.pathname]);
  
  // console.log(scrollbarRef.current?.scrollbar.containerEl);
  return <>{children}</>;
};

export default ScrollToTop;
