import { RxCross2 } from 'react-icons/rx';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(79, 209, 197, 0.2);
  overflow-y: auto;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 452px;
  width: 100%;
  transform: translate(-50%, -50%);

  @media screen and (max-height: 380px) {
    top: 30px;
    left: 50%;
    max-width: 452px;
    width: 100%;
    transform: translateX(-50%);
  }
`;

export const CloseIcon = styled(RxCross2)`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Button = styled.button`
  position: absolute;
  z-index: 1;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 12px;
  transition: border-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
