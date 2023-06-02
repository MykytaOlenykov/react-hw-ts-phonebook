import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { EditContactForm } from "components/ContactForm";
import * as S from "./Modal.styled";

interface IProps {
  onCloseModal: () => void;
  id: string;
  name: string;
  number: string;
}

const modalRoot = document.querySelector("#modal-root")!;

export const Modal: React.FC<IProps> = ({ onCloseModal, ...otherProps }) => {
  useEffect(() => {
    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onCloseModal();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleCloseModal);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleCloseModal);
    };
  }, [onCloseModal]);

  return createPortal(
    <S.Backdrop>
      <S.Modal>
        <S.Button type="button" onClick={onCloseModal}>
          <S.CloseIcon />
        </S.Button>
        <EditContactForm {...otherProps} />
      </S.Modal>
    </S.Backdrop>,
    modalRoot
  );
};
