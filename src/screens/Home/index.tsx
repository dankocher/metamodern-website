import styles from './index.module.scss';

import { useRef } from 'react';

import MainTitle from '../../components/MainTitle';
import ProjectList from '../../components/ProjectList';

const Home = () => {
  const portfolioRef = useRef(null);
  return (
    <div className={styles.container}>
      <MainTitle portfolioRef={portfolioRef} />
      <ProjectList portfolioRef={portfolioRef} />
    </div>
  );
};

export default Home;
