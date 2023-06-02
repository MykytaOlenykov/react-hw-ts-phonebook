import styled from 'styled-components';
import backgroundImg from 'images/backgroundCube.jpg';
import backgroundImg2x from 'images/backgroundCube@2x.jpg';

export const Section = styled.section`
  padding-top: 188px;
  padding-left: 24px;
  padding-right: 24px;

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: -1;
    display: block;
    width: 260px;
    height: 260px;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    border-radius: 15px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundImg2x});
      background-size: cover;
      background-position: center;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
      top: 24px;
      right: 24px;
      padding-left: 48px;
      padding-right: 48px;
    }

    @media screen and (min-width: 730px) {
      width: calc(100vw - 480px);
      height: calc(100vw - 480px);
    }

    @media screen and (min-width: 1080px) {
      width: 600px;
      height: 600px;
    }
  }
`;

export const SectionTitle = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Title = styled.p`
  margin-bottom: 8.5px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Text = styled.p`
  max-width: 380px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.secondary};
`;
