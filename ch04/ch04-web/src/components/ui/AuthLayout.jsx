import styled from '@emotion/styled';
import ParallaxStars from './ParallaxStars';

const LayoutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;

const ContentWrapper = styled.div`
  z-index: 10;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export default function AuthLayout({ children }) {
    return (
        <LayoutContainer>
            <ParallaxStars />
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </LayoutContainer>
    );
}
