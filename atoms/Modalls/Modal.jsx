
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import './Modal.css';

Modal.setAppElement('#root');

const Modals = ({ isOpen, onClose, content, modalSize }) => {
  const getModalClass = () => {
    switch (modalSize) {
      case 'large':
        return 'ModalLarge';
      case 'small':
        return 'ModalSmall';
      default:
        return 'ModalLeft';
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className={getModalClass()}  // Set the appropriate class
      overlayClassName="Overlay"
    >
      <button className="modalCloseButton" onClick={onClose}>×</button>
      <div className="ModalContent">
        {content}
      </div>
    </Modal>
  );
};

// Adding PropTypes for validation
Modals.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  content: PropTypes.node.isRequired,
  modalSize: PropTypes.oneOf(['default', 'left', 'large', 'small']).isRequired,
};

export default Modals;
