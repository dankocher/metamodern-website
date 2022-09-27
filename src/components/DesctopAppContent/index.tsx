import React, { useRef, createContext, useEffect } from 'react';
import Navigation from '../../navigation';
import { ModalMenuProvider } from '../../context/useModalMenuContext';
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import Scrollbar from 'react-smooth-scrollbar';
import Cursor from '../Cursor';

SmoothScrollbar.use(OverscrollPlugin);

export const ScrollContext = createContext(Scrollbar);

function DesctopAppContent() {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    scrollbarRef.current.scrollbar.updatePluginOptions('overscroll', {
      effect: '',
    });
  });
  return (
    <>
      <Cursor />
      <ModalMenuProvider>
        <Scrollbar ref={scrollbarRef} className={'scrollContainer'}>
          <ScrollContext.Provider value={scrollbarRef}>
            <Navigation isMobile={false} />
          </ScrollContext.Provider>
        </Scrollbar>
      </ModalMenuProvider>
    </>
  );
}

export default DesctopAppContent;
