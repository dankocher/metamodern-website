import { ProjectProps } from '../components/ProjectList/Project/project.interface';
import { ProjectsTypes } from '../constants/projectTypes';

import timeZo from '../assets/images/timeZo.png';
import timeZo2 from '../assets/images/timeZo@2x.png';

import truthOrDare from '../assets/images/truthOrDare.png';
import truthOrDare2 from '../assets/images/truthOrDare@2x.png';
import { SCREENS } from '../navigation/constants';

const data: ProjectProps[] = [
  {
    link: SCREENS.TOD,
    type: ProjectsTypes.MOBILE,
    name: 'Truth or Dare',
    title: 'application of the imitation game',
    description:
      'Truth or Dare removes your responsibility and has a universal approach to any kind of fun.',
    tags: ['Design', 'Mobile', 'Landing'],
    bgImage: { x1: truthOrDare, x2: truthOrDare2 },
    gradient: {
      '--gradient':
        'linear-gradient(47.96deg, #8449C4 14.04%, #8845BD 29.78%, #9C33BA 47.89%, #AA3594 72.47%, #A61F5A 95.92%)',
    },
    isDarkContent: false,
  },
  {
    link: SCREENS.TimeZO,
    type: ProjectsTypes.MOBILE,
    name: 'TimeZo',
    title: 'world time zone app',
    description:
      'TimeZo is the most convenient and fastest way to keep your head clean.',
    tags: ['Design', 'Mobile', 'Landing'],
    bgImage: { x1: timeZo, x2: timeZo2 },
    gradient: {
      '--gradient': 'linear-gradient(180deg, #ffe144 0%, #ffffff 100%)',
    },
    isDarkContent: true,
  },
];

export { data };
