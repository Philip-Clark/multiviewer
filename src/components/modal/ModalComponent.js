import ReactModal from 'react-modal';
import './modalComponent.css';

const ModalComponent = ({ controllerOpen, closeModal, children, id, onAfterOpen }) => {
  return (
    <ReactModal
      isOpen={controllerOpen}
      onRequestClose={closeModal}
      className={'modal'}
      id={id}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.878)5)', // This is an example of a semi-transparent black color
          opacity: 1,
        },
      }}
      onAfterOpen={onAfterOpen}
    >
      {children}
    </ReactModal>
  );
};

export default ModalComponent;
