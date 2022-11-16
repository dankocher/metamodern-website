import { useLocation } from 'react-router-dom';

export const useIsPage = (page) => {
  const location = useLocation();
  return location.pathname === page;
};
