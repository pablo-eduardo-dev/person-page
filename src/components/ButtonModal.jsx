import React from "react";
import style from "./ButtonModal.module.css"; // Importação correta do CSS

function buttonModal() {
  document.body.style.overflow = "hidden";
}

const ButtonModal = ({ text, setModal }) => {
  return (
    <div>
      <a href="#top">
        <button
          onClick={() => {
            setModal(true);
            buttonModal();
          }}
          className={style.buttonModal}
        >
          {text}
        </button>
      </a>
    </div>
  );
};

export default ButtonModal;
