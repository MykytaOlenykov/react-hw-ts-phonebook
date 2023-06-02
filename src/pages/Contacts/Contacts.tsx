import React from "react";
import { useFetchContactsQuery } from "redux/contacts/slice";
import { AddContactForm } from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactList } from "components/ContactList";
import { Loader } from "components/Loader";
import * as S from "./Contacts.styled";

const Contacts: React.FC = () => {
  const { data, isSuccess, isFetching, isError } = useFetchContactsQuery();

  if (isError) {
    return (
      <S.Section>
        <S.ErrorText>
          Technical work is in progress. We apologize for the temporary
          inconvenience.
        </S.ErrorText>
      </S.Section>
    );
  }

  return (
    <S.Section>
      <S.SectionTitle>Phonebook</S.SectionTitle>

      <AddContactForm contacts={data!} />

      <S.ContactsContainer>
        <S.TextBox>
          <S.Title>Contacts</S.Title>
          {isFetching && <Loader width="20" height="20" color="#4FD1C5" />}
        </S.TextBox>

        <Filter />
        {isSuccess && data.length ? (
          <ContactList contacts={data} />
        ) : (
          <S.Text>
            You don't have any contacts. Add contacts for them to appear here.
          </S.Text>
        )}
      </S.ContactsContainer>
    </S.Section>
  );
};

export default Contacts;
