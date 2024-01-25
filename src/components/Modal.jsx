import React from "react";
import "./Modal.css";
import { useSpring, animated } from 'react-spring'

import {
  FaDiscord,
  FaXTwitter,
  FaFacebook,
  FaWhatsapp,
  FaXmark,
} from "react-icons/fa6";

const Modal = ({ modal, setModal }) => {

  const animation = useSpring({
    opacity: modal ? 1 : 0
  })

  function hiddenY() {
    document.body.style.overflowY = 'scroll'
  }

  if (modal) 
    return (
      <animated.div style={animation} className="modal">
        <div className="modalContainer">
          <FaXmark onClick={() => {
            setModal(false)
            hiddenY()
          }} className="btnClose" />
          <FaFacebook />
          <FaDiscord />
          <FaXTwitter />
          <FaWhatsapp />
        </div>
      </animated.div>
    );
};

export default Modal;
