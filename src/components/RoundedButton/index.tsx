import { FC } from 'react';
import styles from './index.module.scss';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

interface IRoundedButton {
  className?: string;
  hoverColor?: string;
  bgColor?: string;
  textClass?: string;
  children: string;
  textColor?: string;
  textHoverColor?: string;
  onClick: Function;
}

const Container = styled.div`
    color: ${(props)=>props.textColor};
    background-color: ${(props) => props.bgColor};
    :hover{
        background-color: ${(props) => props.hoverColor};
        color: ${(props) => props.textHoverColor};
    };
  }
`;

const RoundedButton: FC<IRoundedButton> = ({
  className,
  hoverColor = colors.halfYellow,
  bgColor = colors.accentYellow,
  textHoverColor = colors.mainBlack,
  textColor = colors.white,
  textClass = 'lato2836',
  onClick,
  children,
}) => {
  return (
    <Container
      className={`${styles.container} ${className} ${textClass}`}
      bgColor={bgColor}
      hoverColor={hoverColor}
      textHoverColor={textHoverColor}
      onClick={onClick}
      textColor={textColor}
    >
      {children}
    </Container>
  );
};

export default RoundedButton;
