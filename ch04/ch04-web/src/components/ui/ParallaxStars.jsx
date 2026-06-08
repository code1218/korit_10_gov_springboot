import { Global, css } from '@emotion/react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// 별을 무작위로 생성하는 헬퍼 함수
const generateStars = (n) => {
    let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
    for (let i = 1; i < n; i++) {
        value += `, ${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`;
    }
    return value;
};

const shadowSmall = generateStars(700);
const shadowMedium = generateStars(200);
const shadowLarge = generateStars(100);

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const StarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const StarLayer = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: transparent;
  box-shadow: ${props => props.shadows};
  animation: ${animStar} ${props => props.duration}s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background: transparent;
    box-shadow: ${props => props.shadows};
  }
`;

export default function ParallaxStars() {
    return (
        <StarsContainer>
            <StarLayer size={1} shadows={shadowSmall} duration={50} />
            <StarLayer size={2} shadows={shadowMedium} duration={100} />
            <StarLayer size={3} shadows={shadowLarge} duration={150} />
        </StarsContainer>
    );
}
