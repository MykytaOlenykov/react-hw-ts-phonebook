import { useAppDispatch } from "hooks";
import { useAppSelector } from "hooks";
import { changeFilter } from "redux/filter/slice";
import { selectFilter } from "redux/filter/selectors";
import * as S from "./Filter.styled";
import React from "react";

export const Filter = () => {
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <>
      <S.Text>Find contacts by name</S.Text>
      <S.Label aria-label="Contacts filter by name">
        <S.Input
          onChange={handleChangeFilter}
          value={filter}
          name="filter"
          type="text"
          placeholder="Type here..."
        />
      </S.Label>
    </>
  );
};
