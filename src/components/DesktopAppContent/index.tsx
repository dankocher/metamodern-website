import React from 'react';

import Navigation from '../../navigation';
import { ModalMenuProvider } from '../../context/useModalMenuContext';

import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

SmoothScrollbar.use(OverscrollPlugin);

// export const ScrollContext = createContext(Scrollbar);

function DesktopAppContent() {
  // const scrollbarRef = useRef(null);

  // useEffect(() => {
  //   scrollbarRef.current.scrollbar.updatePluginOptions('overscroll', {
  //     effect: '',
  //   });
  // });

  return (
    <>
      {/* <Cursor /> */}
      <ModalMenuProvider>
        {/* <Scrollbar ref={scrollbarRef} className={'scrollContainer'} continuousScrolling={true} damping={0.2}>
          <ScrollContext.Provider value={scrollbarRef}> */}
        <Navigation isMobile={false}/>
        {/* </ScrollContext.Provider>
        </Scrollbar> */}
      </ModalMenuProvider>
    </>
  );
}

export default DesktopAppContent;
