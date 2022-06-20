// import styles from "./index.module.scss";
import { useRef } from 'react';

import MainTitle from '../../components/MainTitle';
import ProjectList from '../../components/ProjectList';

const Home = () => {
  const portfolioRef = useRef(null);
  return (
    <>
      <MainTitle portfolioRef={portfolioRef} />
      <ProjectList portfolioRef={portfolioRef} />
    </>
  );
};

export default Home;
