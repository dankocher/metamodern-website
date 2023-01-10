import styled from "styled-components";
import SVG from "react-inlinesvg";

import logo from "./svg/logo.svg";
import behance from "./svg/behance.svg";
import dribbble from "./svg/dribbble.svg";
import instagram from "./svg/instagram.svg";
import googlePlay from "./svg/google-play.svg";
import appStore from "./svg/app-store.svg";
import calendar from "./svg/calendar.svg";
import phone from "./svg/phone.svg";
import quickEditing from "./svg/quick-editing.svg";
import sharing from "./svg/sharing.svg";
import simpleDesign from "./svg/simple-design.svg";
import touch from "./svg/touch.svg";
import location from "./svg/location.svg";
import TimeZoLogo from "./svg/TimeZo-logo.svg";
import todLogo from "./svg/tod.svg";
import BBlistLogo from "./svg/bblistlogo.svg";
import android from "./svg/android.svg";
import apple from "./svg/apple.svg";

const icons = {
  logo,
  behance,
  dribbble,
  instagram,
  googlePlay,
  appStore,
  calendar,
  phone,
  quickEditing,
  sharing,
  simpleDesign,
  touch,
  location,
  TimeZoLogo,
  todLogo,
  BBlistLogo,
  android,
  apple,
};

const StyledSVG = styled(SVG)`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  * {
    transition: fill 150ms ease;
    fill: ${({ color }) => color};
  }
`;

export const Icon = ({ name = "logo", color, size = 36, className }) => {
  return (
    <StyledSVG
      color={color}
      src={icons[name]}
      width={size}
      height={size}
      className={className}
    />
  );
};
