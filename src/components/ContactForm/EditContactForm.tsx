import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  useUpdateContactMutation,
  useFetchContactsQuery,
} from "redux/contacts/slice";
import { Loader } from "components/Loader";
import { validatePattern, errorMessage } from "constants/";
import * as S from "./ContactForm.styled";
import { IContact } from "types";

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .max(255)
    .matches(validatePattern.name, errorMessage.name),
  number: yup
    .string()
    .max(20)
    .matches(validatePattern.number, errorMessage.number),
});

const initialValues = {
  name: "",
  number: "",
};

type Inputs = {
  name: string;
  number: string;
};

export const EditContactForm: React.FC<IContact> = ({
  id,
  name: oldName,
  number: oldNumber,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const [updateContact, { isLoading: isUpdating, isError }] =
    useUpdateContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  useEffect(() => {
    if (isError) {
      toast.error(
        "Something went wrong while updating the contact, please try again later."
      );
    }
  }, [isError]);

  const onSubmit: SubmitHandler<Inputs> = async ({ name, number }) => {
    const normalizedName = name.trim();

    let data: { name?: string; number?: string } = {};

    if (normalizedName) {
      if (contactValidationName(normalizedName)) {
        return;
      }
      data.name = normalizedName;
    }

    if (number) {
      if (contactValidationNumber(number)) {
        return;
      }
      data.number = number;
    }

    await updateContact({ id, data });

    reset();
  };

  const contactValidationName = (newName: string): boolean => {
    if (newName === oldName) {
      toast.error("You entered the old name.");
      return true;
    }

    if (contacts?.some(({ name }) => name === newName)) {
      toast.error(`${newName} is already in contacts.`);
      return true;
    }

    return false;
  };

  const contactValidationNumber = (newNumber: string): boolean => {
    if (newNumber === oldNumber) {
      toast.error("You entered the old phone number.");
      return true;
    }

    return false;
  };

  return (
    <S.ContactForm
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <S.Label>
        <S.TextLabel>Current name: {oldName}</S.TextLabel>
        <S.Input {...register("name")} type="text" placeholder="New name" />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Current number: {oldNumber}</S.TextLabel>
        <S.Input
          {...register("number")}
          type="tel"
          placeholder="New phone number"
        />
        {errors.number && <S.ErrorText>{errors.number?.message}</S.ErrorText>}
      </S.Label>

      <S.Button type="submit" disabled={isUpdating}>
        {isUpdating ? (
          <Loader width="15" height="15" color="#fff" />
        ) : (
          "Edit contact"
        )}
      </S.Button>
    </S.ContactForm>
  );
};
