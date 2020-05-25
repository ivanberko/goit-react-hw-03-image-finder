import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ images }) =>
  images.map(({ id, webformatURL }) => (
    <li className="ImageGalleryItem" key={id}>
      <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
    </li>
  ));

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ImageGalleryItem;
