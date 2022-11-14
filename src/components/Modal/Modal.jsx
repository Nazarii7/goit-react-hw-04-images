import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

function Modal({ toggleModal, largeUrl, alt }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      toggleModal();
    }
  };
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>
        <img src={largeUrl} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  largeUrl: PropTypes.string,
  alt: PropTypes.string,
  modalToggle: PropTypes.func,
};

export default Modal;
