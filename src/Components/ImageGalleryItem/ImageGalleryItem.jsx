import React from "react";
import PropTypes from "prop-types";
import {
  ImgGalleryItem,
  ImageGalleryItemImage,
} from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ images, onClickModal }) =>
  images.map(({ id, webformatURL, largeImageURL }) => (
    <li className={ImgGalleryItem} key={id}>
      <img
        src={webformatURL}
        data-large-url={largeImageURL}
        alt=""
        className={ImageGalleryItemImage}
        onClick={onClickModal}
      />
    </li>
  ));

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ImageGalleryItem;
