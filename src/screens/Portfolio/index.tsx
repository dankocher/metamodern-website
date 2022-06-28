// import styles from "./index.module.scss";
import { useState } from 'react';

import { ProjectTypes } from '../../constants/projectTypes';

import PortfolioOptions from '../../components/PortfolioOptions';
import ProjectList from '../../components/ProjectList';

const Portfolio = () => {
  const [currentFilter, setCurrentFilter] = useState<ProjectTypes>(
    ProjectTypes.ALL
  );

  return (
    <>
      <PortfolioOptions
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
      <ProjectList currentFilter={currentFilter} />
    </>
  );
};

export default Portfolio;
