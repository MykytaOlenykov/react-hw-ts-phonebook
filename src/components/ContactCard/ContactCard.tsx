import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDeleteContactMutation } from 'redux/contacts/slice';
import { Modal } from 'components/Modal';
import * as S from './ContactCard.styled';
import { IContact } from 'types';

export const ContactCard: React.FC<IContact> = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting, isError }] =
    useDeleteContactMutation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isError) {
      toast.error(
        'Something went wrong while deleting a contact, please try again later.'
      );
    }
  }, [isError]);

  const handleDeleteContact = async (id: string): Promise<void> => {
    await deleteContact(id);
  };

  const handleOpenModal = (): void => {
    setIsOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  return (
    <S.ContactCard>
      <S.Name>{name}</S.Name>
      <S.Number>
        Phone number:
        <span>{number}</span>
      </S.Number>

      <S.List>
        <li>
          <S.Button
            type="button"
            onClick={() => handleDeleteContact(id)}
            disabled={isDeleting}
            className="delete"
          >
            <S.DeleteIcon />
            Delete
          </S.Button>
        </li>
        <li>
          <S.Button type="button" className="edit" onClick={handleOpenModal}>
            <S.EditIcon />
            Edit
          </S.Button>
        </li>
      </S.List>
      {isOpenModal && (
        <Modal
          id={id}
          name={name}
          number={number}
          onCloseModal={handleCloseModal}
        />
      )}
    </S.ContactCard>
  );
};
