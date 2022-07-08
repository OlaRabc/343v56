import './PopupDeletedVisitInformation.css';
import Modal from '../popupBasic/Modal';

const PopupDeletedVisitInformation = ({
    open,
    onClose,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            Wizyta uzunięta
        </Modal>
    )
}

export default PopupDeletedVisitInformation;
