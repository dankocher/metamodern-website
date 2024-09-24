import styles from "./styles.module.scss";
import styled from "styled-components";

import { Icon } from "../Icon";
import { colors } from "../../styles/colors";

const Link = styled.a`
  background-color: ${({ theme }) =>
    theme === "dark" ? colors.main : colors.white};

  .${styles.text} {
    color: ${({ theme }) => (theme === "dark" ? colors.white : colors.main)};
  }
`;

const LinkButtons = ({
  link,
  theme,
  iconSize = 24,
  iconClass,
  linkClass,
  smallFontClass = "smallFont",
  downFontClass = "downFont",
}) => {
   const linkStore = [
    {
      title: "Google Play",
      href: link.googlePlay,
      icon: "googlePlay",
    },
    {
      title: "App Store",
      href: link.appStore,
      icon: "appStore",
    },
  ];

  return (
    <div className={`${styles.storeLink}`}>
      {linkStore.map(({ title, href, icon }) => (
        <Link
          key={title}
          className={`${styles.link} ${linkClass}`}
          theme={theme}
          href={href ? href : null}
          target={href ? "_blank" : null}
          rel={href ? "noreferrer" : null}
        >
          {/* <div className={styles.icon}> */}
          <Icon
            name={icon}
            size={iconSize}
            className={`${styles.icon} ${iconClass}`}
          />
          <div className={styles.text}>
            {href ? (
              <>
                <p className={smallFontClass}>Download on the</p>
                <p className={downFontClass}>{title}</p>
              </>
            ) : (
              <p className={`${styles.soon} ${smallFontClass}`}>Coming soon</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LinkButtons;
