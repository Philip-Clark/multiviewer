import ReactModal from 'react-modal';
import './modalComponent.css';
import PropTypes from 'prop-types';
import '../../button.css';
/**
 * Modal component that displays a modal dialog.
 *
 * @param {boolean} props.controllerOpen - Flag indicating whether the modal is open or not.
 * @param {function} props.closeModal - Function to call when the modal is closed.
 * @param {ReactNode} props.children - The content to be displayed inside the modal.
 * @param {string} [props.id] - The id of the modal.
 * @param {function} [props.onAfterOpen] - Function to be called after the modal has opened.
 * @returns {JSX.Element} The rendered modal component.
 */
const ModalComponent = ({ controllerOpen, closeModal, children, id = '', onAfterOpen }) => {
  return (
    <ReactModal
      isOpen={controllerOpen}
      onRequestClose={closeModal}
      className={'modal'}
      id={id}
      style={{ overlay: { backgroundColor: 'rgba(102, 102, 102, 0.696)5)' } }}
      onAfterOpen={onAfterOpen}
    >
      {children}
    </ReactModal>
  );
};

ModalComponent.propTypes = {
  controllerOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  onAfterOpen: PropTypes.func,
};

export default ModalComponent;
