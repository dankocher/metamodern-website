import React, { Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

type ModalMenuContextProps = {
  isVisible: boolean;
  setIsVisible?: Dispatch<SetStateAction<boolean>>;
};

const initialState: ModalMenuContextProps = {
  isVisible: false,
};

const ModalMenuContext = createContext<ModalMenuContextProps>(initialState);

export const ModalMenuProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(initialState.isVisible);

  const value = { isVisible, setIsVisible };
  return (
    <ModalMenuContext.Provider value={value}>
      {children}
    </ModalMenuContext.Provider>
  );
};

export const useModalMenuContext = () => React.useContext(ModalMenuContext);
