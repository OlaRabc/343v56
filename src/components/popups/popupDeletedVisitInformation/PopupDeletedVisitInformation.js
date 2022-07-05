import Modal from '../popupBasic/Modal';
import './PopupDeletedVisitInformation.css';
const PopupDeletedVisitInformation = ({
    open,
    onClose,
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            Wizyta uzunięta
        </Modal>
    )
}

export default PopupDeletedVisitInformation;
