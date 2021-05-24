import React from "react";
import "./Modal.css";

import ReactDOM from "react-dom";
const Modal = ({ modalData, setIsOpen }) => {
  return ReactDOM.createPortal(
    <>
      <div
        className="backdrop"
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <div className="main-model">
        <p> movespeed: {modalData.movespeed} </p>
        <p> name: {modalData.name} </p>
        <p> armor: {modalData.armor}</p>

        <p> attackdamage: {modalData.attackdamage}</p>
        <p> attackdamageperlevel: {modalData.attackdamageperlevel}</p>

        <button
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close Modal
        </button>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
