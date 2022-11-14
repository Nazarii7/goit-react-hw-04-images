import Modal from '../Modal/Modal';
import { useState } from 'react';
import css from './ImageGallaryItem.module.css';
import PropTypes from 'prop-types';

function ImageGallaryItem({ url, tags, largeUrl }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <img
        className={css.ImageGallaryItemImage}
        src={url}
        alt={tags}
        onClick={toggleModal}
      />

      {showModal && (
        <Modal largeUrl={largeUrl} alt={tags} toggleModal={toggleModal} />
      )}
    </>
  );
}

ImageGallaryItem.propTypes = {
  largeUrl: PropTypes.string,
  tags: PropTypes.string,
  url: PropTypes.string,
};

export default ImageGallaryItem;
