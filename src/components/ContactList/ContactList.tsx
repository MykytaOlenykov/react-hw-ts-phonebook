import React from "react";
import { useSelector } from "react-redux";
import { selectFilter } from "redux/filter/selectors";
import { ContactCard } from "components/ContactCard";
import * as S from "./ContactList.styled";
import { IContact } from "types";

interface IProps {
  contacts: IContact[];
}

export const ContactList: React.FC<IProps> = ({ contacts }) => {
  const filter = useSelector(selectFilter);

  const getVisibleContacts = (): IContact[] => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <S.List>
      {visibleContacts.map(({ id, name, number }) => (
        <S.Item key={id}>
          <ContactCard id={id} name={name} number={number} />
        </S.Item>
      ))}
    </S.List>
  );
};
