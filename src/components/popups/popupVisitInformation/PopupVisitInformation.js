import Modal from '../popupBasic/Modal';
import './PopupVisitInformation.css';

const PopupVisitInformation = ({
    open,
    onClose,
    onConfirmButtonClick,
    onCancelButtonClick
}) => {


    return (
        <Modal
        open={open}
        onClose={onClose}>
          
        </Modal>
    )
}

export default PopupVisitInformation;
