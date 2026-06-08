import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 16px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    .border-glow {
      opacity: 1;
    }
  }
`;

export const BorderGlow = styled.div`
  position: absolute;
  inset: -2px;
  border-radius: 18px;
  // background: conic-gradient(from 0deg, transparent 60%, #00f0ff, #ff00ff);
  // animation: ${rotate} 4s linear infinite;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: -2;
  
  /* 클래스명으로 하위 선택자 제어를 위해 지정 */
  className: "border-glow";
`;

export const BorderBlur = styled(BorderGlow)`
  filter: blur(15px);
  z-index: -3;
  opacity: 0;
  className: "border-glow";
`;

export const CardContent = styled.div`
  position: relative;
  background: rgba(20, 20, 30, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  color: #fff;
  z-index: -1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
`;

export const CardTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #fff, #a5b4fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00f0ff;
    box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    background: rgba(0, 0, 0, 0.4);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const ErrorText = styled.div`
  color: #ff4757;
  font-size: 0.85rem;
  padding-left: 0.5rem;
  min-height: 1.2em;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.3);
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const LinkText = styled.div`
  text-align: center;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  
  a {
    color: #a5b4fc;
    font-weight: 600;
    margin-left: 0.5rem;
    
    &:hover {
      color: #fff;
      text-shadow: 0 0 8px rgba(165, 180, 252, 0.6);
    }
  }
`;

export default function GlassCardComponent({ children }) {
  return (
    <CardWrapper>
      <BorderBlur className="border-glow" />
      <BorderGlow className="border-glow" />
      <CardContent>
        {children}
      </CardContent>
    </CardWrapper>
  );
}
