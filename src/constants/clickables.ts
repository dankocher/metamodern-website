import projectListStyles from "../components/ProjectList/Project/index.module.scss";
import modalMenuStyles from "../components/ModalMenu/Item/index.module.scss";
import menuStyles from "../components/Menu/index.module.scss";
import itemStyles from "../components/Menu/Item/index.module.scss";
import iconMenuBtuttonStyles from "../components/IconMenuButton/index.module.scss";
import headerStyles from "../components/Header/index.module.scss";
import attachFileStyles from "../components/AttachFile/index.module.scss";

export const clicables = [
  "a",
  'input[type="text"]',
  'input[type="email"]',
  'input[type="number"]',
  'input[type="submit"]',
  'input[type="image"]',
  "label[for]",
  "select",
  "textarea",
  "input",
  "button",
  ".link",
  ".removeBtn",
  `.${projectListStyles.container}`,
  `.${modalMenuStyles.container}`,
  `.${itemStyles.container}`,
  `.${iconMenuBtuttonStyles.menuLogo}`,
  `.${headerStyles.logo}`,
  `.${attachFileStyles.label}`,
  `.${attachFileStyles.removeBtn}`
];
