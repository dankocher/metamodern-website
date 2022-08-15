import { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import { ScrollContext } from "../../App";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  const scrollbarRef = useContext(ScrollContext);
  
  useEffect(() => {
    scrollbarRef.current.scrollbar.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

export default ScrollToTop;
