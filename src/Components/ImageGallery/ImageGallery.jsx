import React from "react";
import { ImagesGallery } from "./ImageGallery.module.css";

const ImageGallery = ({ children }) => (
  <ul className={ImagesGallery}>{children}</ul>
);

export default ImageGallery;
