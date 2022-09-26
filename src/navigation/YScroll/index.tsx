import React, { Dispatch, SetStateAction } from 'react';
import { createContext, useState } from 'react';

type YScrollProps = {
  yScroll: number;
  setYScroll?: Dispatch<SetStateAction<number>>;
};

const initialState: YScrollProps = {
  yScroll: 0,
};

const YScrollContext = createContext<YScrollProps>(initialState);

export const YScrollProvider = ({ children }) => {
  const [yScroll, setYScroll] = useState(0);
  const value = { yScroll, setYScroll };

  return (
    <YScrollContext.Provider value={value}>{children}</YScrollContext.Provider>
  );
};

export const useYScrollContext = (): YScrollProps =>
  React.useContext(YScrollContext);
