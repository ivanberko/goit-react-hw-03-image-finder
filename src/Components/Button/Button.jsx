import React from "react";
import PropTypes from "prop-types";
import { Btn } from "./Button.module.css";

const Button = ({ onLoadMore }) => (
  <button type="button" className={Btn} onClick={onLoadMore}>
    Load more
  </button>
);

Button.propsTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
export default Button;
