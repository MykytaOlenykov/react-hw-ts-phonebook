import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAddContactMutation } from "redux/contacts/slice";
import { Loader } from "components/Loader";
import { validatePattern, errorMessage } from "constants/";
import * as S from "./ContactForm.styled";
import { IContact } from "types";

interface IProps {
  contacts: IContact[];
}

const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2)
    .max(255)
    .matches(validatePattern.name, errorMessage.name)
    .required(),
  number: yup
    .string()
    .max(20)
    .matches(validatePattern.number, errorMessage.number)
    .required(),
});

const initialValues = {
  name: "",
  number: "",
};

type Inputs = {
  name: string;
  number: string;
};

export const AddContactForm: React.FC<IProps> = ({ contacts }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContact>({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });
  const [addContact, { isLoading: isAdding, isError }] =
    useAddContactMutation();

  useEffect(() => {
    if (isError) {
      toast.error(
        "Something went wrong while adding a contact, please try again later."
      );
    }
  }, [isError]);

  const onSubmit: SubmitHandler<Inputs> = async ({ name, number }) => {
    const normalizedName = name.trim();

    if (contactValidationByName(normalizedName)) {
      toast.error(`${normalizedName} is already in contacts.`);
      return;
    }

    await addContact({ name: normalizedName, number });
    reset();
  };

  const contactValidationByName = (newName: string): boolean => {
    return contacts.some(({ name }) => name === newName);
  };

  return (
    <S.ContactForm
      autoComplete="off"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <S.Label>
        <S.TextLabel>Name</S.TextLabel>
        <S.Input {...register("name")} type="text" placeholder="Full name" />
        {errors.name && <S.ErrorText>{errors.name?.message}</S.ErrorText>}
      </S.Label>

      <S.Label>
        <S.TextLabel>Number</S.TextLabel>
        <S.Input
          {...register("number")}
          type="tel"
          placeholder="Phone number"
        />
        {errors.number && <S.ErrorText>{errors.number?.message}</S.ErrorText>}
      </S.Label>

      <S.Button type="submit" disabled={isAdding}>
        {isAdding ? (
          <Loader width="15" height="15" color="#fff" />
        ) : (
          "Add contact"
        )}
      </S.Button>
    </S.ContactForm>
  );
};
