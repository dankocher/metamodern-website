import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect = ({ url }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(url, '_blank', 'noopener,noreferrer');
    navigate(-1);
  }, []);

  return <></>;
};

export default Redirect;
