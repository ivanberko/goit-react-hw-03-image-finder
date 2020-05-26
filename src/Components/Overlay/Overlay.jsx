import React from "react";
import PropTypes from "prop-types";
import { OverlayModal, Modal } from "./Overlay.module.css";

const Overlay = ({ onClickModal, children }) => (
  <div className={OverlayModal} data-cover="overlay" onClick={onClickModal}>
    <div className={Modal}>{children}</div>
  </div>
);

Overlay.propsTypes = {
  onClickModal: PropTypes.func.isRequired,
};
export default Overlay;
