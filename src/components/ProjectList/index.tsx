import styles from './index.module.scss';

import { ProjectsTypes } from '../../constants/projectTypes';

import Project from './Project';

import { data } from '../../data/projectData';

const ProjectList = ({
  portfolioRef = null,
  currentFilter = ProjectsTypes.ALL,
}) => {
  return (
    <div ref={portfolioRef} className={styles.container}>
      {data.map(
        (
          { type, name, title, description, tags, bgImage, isDarkContent },
          index
        ) =>
          (currentFilter === type || currentFilter === ProjectsTypes.ALL) && (
            <Project
              key={`Project-${name}-${index}`}
              name={name}
              title={title}
              description={description}
              tags={tags}
              bgImage={bgImage}
              isDarkContent={isDarkContent}
            />
          )
      )}
    </div>
  );
};

export default ProjectList;
