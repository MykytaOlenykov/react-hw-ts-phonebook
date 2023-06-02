import { IoMdTrash } from 'react-icons/io';
import { IoPencilSharp } from 'react-icons/io5';
import styled from 'styled-components';

export const ContactCard = styled.div`
  position: relative;
  width: 100%;
  padding-top: 28px;
  padding-bottom: 24px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  border-radius: 12px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    padding-top: 20px;
    padding-bottom: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Name = styled.p`
  margin-bottom: 7.5px;
  max-width: 180px;
  word-wrap: break-word;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.secondary};

  @media screen and (max-width: 350px) {
    max-width: 100px;
  }
`;

export const Number = styled.p`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.secondaryText};

  & > span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    padding-bottom: 4px;

    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 4px;
      background-color: ${({ theme }) => theme.colors.secondaryBg};
      border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    gap: 8px;
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  gap: 2px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    top: 12px;
    right: 12px;
    gap: 8px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 50px;
  font-weight: 700;
  font-size: 10px;
  line-height: 1.5;
  text-transform: uppercase;
  padding: 0;
  border: none;
  background-color: transparent;
  transition: background-color
    ${({ theme }) => `${theme.duration} ${theme.timingFunction}`};
  cursor: pointer;

  &.delete {
    color: ${({ theme }) => theme.colors.iconBtn};
  }

  &.edit {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const DeleteIcon = styled(IoMdTrash)`
  width: 15px;
  height: 15px;
  fill: currentColor;
`;

export const EditIcon = styled(IoPencilSharp)`
  width: 12px;
  height: 12px;
  fill: currentColor;
`;
