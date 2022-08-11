import { useEffect, useRef } from "react";

import Navigation from "./navigation";

import { ModalMenuProvider } from "./context/useModalMenuContext";

import grained from "./utils/grained";
import Cursor from "./components/Cursor/Cursor";

function App() {
  useEffect(() => {
    window.document.getElementsByTagName("html")[0].id = "container-noise";

    grained("#container-noise", {
      animate: true,
      patternWidth: 200,
      patternHeight: 200,
      grainOpacity: 0.04,
      grainDensity: 2,
      grainWidth: 2,
      grainHeight: 2,
      grainChaos: 0.5,
      grainSpeed: 5,
    });
  }, []);

  return (
    <ModalMenuProvider>
      <Cursor />
      <Navigation />
    </ModalMenuProvider>
  );
}

export default App;
