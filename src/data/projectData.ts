import { ProjectProps } from "../components/ProjectList/Project/project.interface";

import timeZo from "../assets/images/timeZo.png";
import timeZo2 from "../assets/images/timeZo@2x.png";
import timeZo3 from "../assets/images/timeZo@3x.png";
import truthOrDare from "../assets/images/truthOrDare.png";
import truthOrDare2 from "../assets/images/truthOrDare@2x.png";
import truthOrDare3 from "../assets/images/truthOrDare@3x.png";

const data: ProjectProps[] = [
  {
    title: "Приложени имитации игры ”Правда или действие”",
    description:
      "Разработали инновационное приложения для семейного и дружественного отдыха в любых условиях.",
    tags: ["Приложение", "Дизайн", "Разработка", "Иллюстрации"],
    bgImage: { x1: truthOrDare, x2: truthOrDare2, x3: truthOrDare3 },

    isDarkContent: false,
  },
  {
    title: "TimeZo - конвертор временных зон",
    description:
      "Разработали инновационное приложения для семейного и дружественного отдыха в любых условиях.",
    tags: ["Приложение", "Дизайн", "Разработка", "Иллюстрации"],
    bgImage: { x1: timeZo, x2: timeZo2, x3: timeZo3 },
    isDarkContent: true,
  },
];

export { data };
