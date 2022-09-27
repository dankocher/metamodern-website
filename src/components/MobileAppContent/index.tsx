import React from 'react';
import Navigation from '../../navigation';
import { ModalMenuProvider } from '../../context/useModalMenuContext';

function MobileAppContent() {
  return (
    <>
      <ModalMenuProvider>
        <Navigation isMobile={true} />
      </ModalMenuProvider>
    </>
  );
}

export default MobileAppContent;
