import './PopupPatientMassage.css';
import Modal from '../popupBasic/Modal';

const PopupPatientMassage = ({
    open,
    onClose,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            Wizyta zaakceptowana
        </Modal>
    )
}

export default PopupPatientMassage;
