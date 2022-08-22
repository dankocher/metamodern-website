import React, { useRef, createContext } from "react";
import Navigation from "./navigation";
import { ModalMenuProvider } from "./context/useModalMenuContext";
import { BrowserRouter } from "react-router-dom";
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import Scrollbar from "react-smooth-scrollbar";

import axios from "axios";
import Cursor from "./components/Cursor";

axios.defaults.baseURL = process.env.PUBLIC_URL;

SmoothScrollbar.use(OverscrollPlugin);

export const ScrollContext = createContext(Scrollbar);

function App() {
  const scrollbarRef = useRef(null);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Cursor />
      <ModalMenuProvider>
        <Scrollbar ref={scrollbarRef}>
          <ScrollContext.Provider value={scrollbarRef}>
            <Navigation />
          </ScrollContext.Provider>
        </Scrollbar>
      </ModalMenuProvider>
    </BrowserRouter>
  );
}

export default App;
