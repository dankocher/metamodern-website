import Navigation from './navigation';

import { ModalMenuProvider } from './context/useModalMenuContext';

function App() {
  return (
    <ModalMenuProvider>
      <Navigation />
    </ModalMenuProvider>
  );
}

export default App;
