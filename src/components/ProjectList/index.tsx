import styles from './index.module.scss';

import Project from './Project';

import { data } from '../../data/projectData';

const ProjectList = ({ portfolioRef }) => {
  return (
    <div ref={portfolioRef} className={styles.container}>
      {data.map(
        ({ name, title, description, tags, bgImage, isDarkContent }, index) => (
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
