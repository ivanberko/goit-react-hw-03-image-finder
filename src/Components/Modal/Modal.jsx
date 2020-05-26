import React from "react";
import PropTypes from "prop-types";

const Modal = ({ largeImg }) => <img src={largeImg} alt="" />;

Modal.propsTypes = {
  largeImg: PropTypes.string.isRequired,
};

export default Modal;
