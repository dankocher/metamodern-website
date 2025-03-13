import { ProjectProps } from "../components/ProjectList/Project/project.interface";
import { ProjectsTypes } from "../constants/projectTypes";

import calmCatsBackground from "../assets/images/calmCatsBackground.png";
import contractionsBackground from "../assets/images/contractionsBackground.png";

import { SCREENS } from "../navigation/constants";

const data: ProjectProps[] = [
  {
    link: SCREENS.TOD,
    type: ProjectsTypes.MOBILE,
    name: "Truth or Dare",
    title: "- application of the imitation game",
    description:
      "Truth or Dare removes your responsibility and has a universal approach to any kind of fun.",
    tags: ["Design", "Mobile", "Landing"],
    bgImage: { name: 'truthOrDare' },
    gradient: {
      "--gradient":
        "linear-gradient(47.96deg, #8449C4 14.04%, #8845BD 29.78%, #9C33BA 47.89%, #AA3594 72.47%, #A61F5A 95.92%)",
    },
    isDarkContent: false,
  },
  {
    link: SCREENS.TIME_ZO,
    type: ProjectsTypes.MOBILE,
    name: "World Clock",
    title: "- world time zone app",
    description:
      "World Clock is the most convenient and fastest way to keep your head clean.",
    tags: ["Design", "Mobile", "Landing"],
    bgImage: { name: 'timeZo' },
    gradient: {
      "--gradient":
        "linear-gradient(180deg, #FFD600 0%, rgba(255, 214, 0, 0.44) 100%)",
    },
    isDarkContent: true,
  },
  // {
  //   link: SCREENS.BB_LIST,
  //   type: ProjectsTypes.MOBILE,
  //   name: "BB-list",
  //   title: "- task manager",
  //   description:
  //     "Your personal task manager BB-list for work, school, and personal life. All your tasks and records in one place.",
  //   tags: ["Design", "Research", "Mobile", "Landing"],
  //   bgImage: { name: 'BB-list' },
  //   gradient: {
  //     "--gradient": `#EFF3FF`,
  //   },
  //   isDarkContent: true,
  // },
  {
    link: "https://apps.apple.com/us/app/did-you-ever-group-game/id1631145256",
    type: ProjectsTypes.MOBILE,
    name: "Did You Ever",
    title: "- game for party",
    description:
      "Did You Ever... Stop racking your brain to complete this statement. Just download our game. It will make even the most boring evening unforgettable.",
    tags: ["Design", "Mobile", "Landing"],
    bgImage: { name: 'neverHaveEver' },
    gradient: {
      "--gradient": "linear-gradient(169.47deg, #2C1736 0.69%, #22033A 99.42%)",
    },
    isDarkContent: false,
  },
  {
    link: "https://www.behance.net/gallery/154107741/BeRead-Online-Books-Reading-App-UXUI",
    type: ProjectsTypes.MOBILE,
    name: "BeRead",
    title: "- online books",
    description:
      "BeRead is a unique portable magic. The goal is to make an app that combines the functions of a book reader, a social network and the best assistant in the book world. An app that will replace the entire cycle of finding and buying a book. ",
    tags: ["Design", "Mobile"],
    bgImage: { name: 'beRead' },
    gradient: {
      "--gradient": `#FFFFFF`,
    },
    isDarkContent: true,
  },
  {
    link: `https://www.behance.net/gallery/161506605/Medicine-Reminder-mobile-app-UXUI`,
    type: ProjectsTypes.MOBILE,
    name: "Medicine Reminder",
    title: "",
    description:
      "The app reminds you of your medications and keeps track of your health settings.",
    tags: ["Design", "Research", "Mobile"],
    bgImage: { name: 'medReminder' },
    gradient: {
      "--gradient": `radial-gradient(55.08% 48.35% at 64.53% 73.41%, rgba(118, 68, 158, 1) 27.08%, rgba(23, 25, 31, 1) 100%)`,
    },
    isDarkContent: false,
    isBgImgWrapper: true,
  },
  {
    link: `https://dribbble.com/shots/15948449-Relaxiki-Meditation-app`,
    type: ProjectsTypes.MOBILE,
    name: "CalmCats",
    title: "- meditation app",
    description:
      "CalmCats is an app for meditation and breathing practices. It is a scientifically proven fact that such practices improve the quality of life. And who else improves quality of life? That's right - cute cats. Combining one with the other, we got this great app for breathing practices.",
    tags: ["Design", "Mobile"],
    bgImage: { name: 'calmCats' },
    gradient: {
      "--gradient": `#E8E8E8 url(${calmCatsBackground})`,
    },
    isDarkContent: true,
  },
  {
    link: SCREENS.CONTRACTIONS,
    type: ProjectsTypes.MOBILE,
    name: "Contraction Counter & Tracker",
    title: "",
    description: "The Contraction Counter is your reliable assistant while waiting for a miracle!",
    tags: ["Design", "Mobile"],
    bgImage: { name: 'contractions' },
    gradient: {
      "--gradient": `#F0F0FF url(${contractionsBackground})`,
    },
    isDarkContent: true,
  },
];

export { data };
