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
    name: '”Правда или действие”',
    title: 'приложени имитации игры',
    description:
      'Разработали инновационное приложения для семейного и дружественного отдыха в любых условиях.',
    tags: ['Приложение', 'Дизайн', 'Разработка', 'Иллюстрации'],
    bgImage: { x1: truthOrDare, x2: truthOrDare2 },
    gradient: {
      '--gradient':
        'linear-gradient(47.96deg, #8449C4 14.04%, #8845BD 29.78%, #9C33BA 47.89%, #AA3594 72.47%, #A61F5A 95.92%)',
    },
    isDarkContent: false,
  },
  {
    link: SCREENS.TOD,
    type: ProjectsTypes.MOBILE,
    name: 'TimeZo',
    title: 'конвертор временных зон',
    description:
      'Разработали инновационное приложения для семейного и дружественного отдыха в любых условиях.',
    tags: ['Приложение', 'Дизайн', 'Разработка', 'Иллюстрации'],
    bgImage: { x1: timeZo, x2: timeZo2 },
    gradient: {
      '--gradient': 'linear-gradient(180deg, #ffe144 0%, #ffffff 100%)',
    },
    isDarkContent: true,
  },
  {
    link: SCREENS.TOD,
    type: ProjectsTypes.LANDING,
    name: '”Правда или действие”',
    title: 'приложени имитации игры',
    description:
      'Разработали инновационное приложения для семейного и дружественного отдыха в любых условиях.',
    tags: [
      'Приложение',
      'Дизайн',
      'Разработка',
      'Иллюстрации',
      'Приложение',
      'Дизайн',
      'Разработка',
    ],
    bgImage: { x1: truthOrDare, x2: truthOrDare2 },
    gradient: {
      '--gradient':
        'linear-gradient(47.96deg, #8449C4 14.04%, #8845BD 29.78%, #9C33BA 47.89%, #AA3594 72.47%, #A61F5A 95.92%)',
    },
    isDarkContent: false,
  },
];

export { data };
