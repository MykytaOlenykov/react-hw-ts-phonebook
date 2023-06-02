import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 100%;
  padding: 12px 16px 12px 16px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  backdrop-filter: blur(10.5px);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  transform: translate(-50%, -101%);
  visibility: hidden;
  transition: transform
      ${({ theme }) => `${theme.duration} ${theme.timingFunction}`},
    visibility ${({ theme }) => theme.duration};

  &.active {
    transform: translate(-50%, 0);
    visibility: visible;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    display: none;
  }
`;
