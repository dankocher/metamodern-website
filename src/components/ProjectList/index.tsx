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
          {
            type,
            name,
            title,
            description,
            tags,
            bgImage,
            gradient,
            isDarkContent,
          },
          index
        ) =>
          (currentFilter === type || currentFilter === ProjectsTypes.ALL) && (
            <div
              key={`Project-${name}-${index}`}
              className={styles.projectCell}
            >
              <Project
                name={name}
                title={title}
                description={description}
                tags={tags}
                bgImage={bgImage}
                gradient={gradient}
                isDarkContent={isDarkContent}
              />
            </div>
          )
      )}
    </div>
  );
};

export default ProjectList;
