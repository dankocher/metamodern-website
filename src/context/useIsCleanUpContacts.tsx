import React, { Dispatch, SetStateAction } from 'react';
import { createContext, useState } from 'react';

type IsCleanUpContactsContextProps = {
  isCleanUpContacts: boolean;
  setIsCleanUpContacts?: Dispatch<SetStateAction<boolean>>;
};

const initialState: IsCleanUpContactsContextProps = {
  isCleanUpContacts: false,
};

const CleanUpContactsContext =
  createContext<IsCleanUpContactsContextProps>(initialState);

export const CleanUpContactsProvider = ({ children }) => {
  const [isCleanUpContacts, setIsCleanUpContacts] = useState<boolean>(
    initialState.isCleanUpContacts
  );

  const value = { isCleanUpContacts, setIsCleanUpContacts };
  return (
    <CleanUpContactsContext.Provider value={value}>
      {children}
    </CleanUpContactsContext.Provider>
  );
};

export const useIsCleanUpContactsContext = (): IsCleanUpContactsContextProps =>
  React.useContext(CleanUpContactsContext);
