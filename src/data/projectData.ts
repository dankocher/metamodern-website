import { ProjectProps } from '../components/ProjectList/Project/project.interface';
import { ProjectsTypes } from '../constants/projectTypes';

import timeZo from '../assets/images/timeZo.png';
import timeZo2 from '../assets/images/timeZo@2x.png';

import truthOrDare from '../assets/images/truthOrDare.png';
import truthOrDare2 from '../assets/images/truthOrDare@2x.png';

import neverHaveEver from '../assets/images/neverHaveEver.png';
import neverHaveEver2 from '../assets/images/neverHaveEver@2x.png';

import beRead from '../assets/images/beRead.png';
import beRead2 from '../assets/images/beRead@2x.png';

import calmCats from '../assets/images/calmCats.png';
import calmCats2 from '../assets/images/calmCats@2x.png';
import calmCatsBackground from '../assets/images/calmCatsBackground.png';

import medReminder from '../assets/images/medReminder.png';
import medReminder2 from '../assets/images/medReminder@2x.png';
import medReminderBackground from '../assets/images/medReminderBackground.png';

import { SCREENS } from '../navigation/constants';

const data: ProjectProps[] = [
  {
    link: SCREENS.TOD,
    type: ProjectsTypes.MOBILE,
    name: 'Truth or Dare',
    title: '- application of the imitation game',
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
    link: SCREENS.TIME_ZO,
    type: ProjectsTypes.MOBILE,
    name: 'TimeZo',
    title: '- world time zone app',
    description:
      'TimeZo is the most convenient and fastest way to keep your head clean.',
    tags: ['Design', 'Mobile', 'Landing'],
    bgImage: { x1: timeZo, x2: timeZo2 },
    gradient: {
      '--gradient': 'linear-gradient(180deg, #FFD600 0%, rgba(255, 214, 0, 0.44) 100%)',
    },
    isDarkContent: true,
  },
  {
    link: 'https://www.behance.net/gallery/154107741/BeRead-Online-Books-Reading-App-UXUI',
    type: ProjectsTypes.MOBILE,
    name: 'BeRead',
    title: '- online books',
    description:
      'BeRead is a unique portable magic. The goal is to make an app that combines the functions of a book reader, a social network and the best assistant in the book world. An app that will replace the entire cycle of finding and buying a book. ',
    tags: ['Design', 'Mobile'],
    bgImage: { x1: beRead, x2: beRead2 },
    gradient: {
      '--gradient': `#FFFFFF`,
    },
    isDarkContent: true,
  },
  {
    link: 'https://www.behance.net/gallery/158350645/Never-Have-I-Ever-Mobile-game-IOS-Android',
    type: ProjectsTypes.MOBILE,
    name: 'Never Have i ever',
    title: '- game for party',
    description:
      'Never have I ever... Stop racking your brain to complete this statement. Just download our game. It will make even the most boring evening unforgettable.',
    tags: ['Design', 'Mobile', 'Landing'],
    bgImage: { x1: neverHaveEver, x2: neverHaveEver2 },
    gradient: {
      '--gradient': 'linear-gradient(169.47deg, #2C1736 0.69%, #22033A 99.42%)',
    },
    isDarkContent: false,
  },
  {
    link: `https://dribbble.com/shots/15948449-Relaxiki-Meditation-app`,
    type: ProjectsTypes.MOBILE,
    name: 'CalmCats',
    title: '- meditation app',
    description:
      "CalmCats is an app for meditation and breathing practices. It is a scientifically proven fact that such practices improve the quality of life. And who else improves quality of life? That's right - cute cats. Combining one with the other, we got this great app for breathing practices.",
    tags: ['Design', 'Mobile'],
    bgImage: { x1: calmCats, x2: calmCats2 },
    gradient: {
      '--gradient': `#E8E8E8 url(${calmCatsBackground})`,
    },
    isDarkContent: true,
  },
  {
    link: `https://www.behance.net/gallery/161506605/Medicine-Reminder-mobile-app-UXUI`,
    type: ProjectsTypes.MOBILE,
    name: 'Medicine Reminder',
    title: '',
    description:
      "The app reminds you of your medications and keeps track of your health settings.",
    tags: ['Design', 'Research', 'Mobile'],
    bgImage: { x1: medReminder, x2: medReminder2 },
    gradient: {
      '--gradient': `radial-gradient(55.08% 48.35% at 64.53% 73.41%, rgba(118, 68, 158, 1) 27.08%, rgba(23, 25, 31, 1) 100%)`,
    },
    isDarkContent: false,
    isBgImgWrapper: true,
  },
];

export { data };
