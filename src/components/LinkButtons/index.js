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

function _generateLinks(data){
  const result = [];

  if (data.googlePlay) {
    result.push({
      title: "Google Play",
      href: data.googlePlay,
      icon: "googlePlay"
    });
  }

  if (data.appStore) {
    result.push({
      title: "App Store",
      href: data.appStore,
      icon: "appStore"
    });
  }

  return result;
}

const LinkButtons = ({
  link,
  theme,
  iconSize = 24,
  iconClass,
  linkClass,
  smallFontClass = "smallFont",
  downFontClass = "downFont",
}) => {
  const linkStore = _generateLinks(link);

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
