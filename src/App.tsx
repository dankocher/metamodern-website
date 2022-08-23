import Navigation from './navigation';

import { ModalMenuProvider } from './context/useModalMenuContext';
import { CleanUpContactsProvider } from './context/useIsCleanUpContacts';

function App() {
  return (
    <CleanUpContactsProvider>
      <ModalMenuProvider>
        <Navigation />
      </ModalMenuProvider>
    </CleanUpContactsProvider>
  );
}

export default App;
