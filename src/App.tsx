import { useEffect, useRef } from "react";

import Navigation from "./navigation";

import { ModalMenuProvider } from "./context/useModalMenuContext";
import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <ModalMenuProvider>
      <Cursor />
      <Navigation />
    </ModalMenuProvider>
  );
}

export default App;
