import styles from './index.module.scss';

import { ProjectsTypes } from '../../constants/projectTypes';

import Project from './Project';

import { data } from '../../data/projectData';
import { motion } from 'framer-motion';
import { variables as v } from '../../constants/animationVariables';
import AnimatedBlock from '../AnimatedBlock';
import { animationTypes } from '../../constants/animationTypes';

const ProjectList = ({
  portfolioRef = null,
  currentFilter = ProjectsTypes.ALL,
}) => {
  return (
    <div ref={portfolioRef} className={styles.container}>
      {data.map(
        (
          {
            link,
            type,
            name,
            title,
            description,
            tags,
            bgImage,
            gradient,
            isDarkContent,
            isBgImgWrapper,
          },
          index
        ) =>
          (currentFilter === type || currentFilter === ProjectsTypes.ALL) && (
            // <motion.div
            //   initial={{ opacity: 0, y: v.y }}
            //   whileInView={{ opacity: 1, y: 0 }}
            //   transition={{ duration: v.duration, delay: v.delay }}
            //   viewport={{ once: true }}
            //   key={`Project-${name}-${index}`}
            //   className={styles.projectCell}
            // >
            <AnimatedBlock
              animation={animationTypes.UP}
              key={`Project-${name}-${index}`}
              options={{
                className: `${styles.projectCell}`,
              }}
            >
              <Project
                link={link}
                name={name}
                title={title}
                description={description}
                tags={tags}
                bgImage={bgImage}
                gradient={gradient}
                isDarkContent={isDarkContent}
                isBgImgWrapper={isBgImgWrapper}
              />
            </AnimatedBlock>
            // </motion.div>
          )
      )}
    </div>
  );
};

export default ProjectList;
