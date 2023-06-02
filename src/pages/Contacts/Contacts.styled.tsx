import styled from "styled-components";
import backgroundImg from "images/background.jpg";
import backgroundImg2x from "images/background@2x.jpg";

export const ErrorText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (min-width: 420px) {
    font-size: 24px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    font-size: 28px;
  }
`;

export const Section = styled.section`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  align-items: center;
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 24px;
  padding-right: 24px;

  &::after {
    content: "";
    position: absolute;
    top: 12px;
    left: 50%;
    z-index: -1;
    display: block;
    width: calc(100% - 24px);
    height: 300px;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    border-radius: 15px;
    transform: translateX(-50%);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${backgroundImg2x});
      background-size: cover;
      background-position: center;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
      top: 24px;
      width: calc(100% - 48px);
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding-left: 48px;
    padding-right: 48px;
  }

  @media screen and (min-width: 1000px) {
    flex-wrap: nowrap;
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

export const TextBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ContactsContainer = styled.div`
  width: 100%;
  padding: 28px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding: 45px 51px;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 350px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
