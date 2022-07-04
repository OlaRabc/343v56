import Modal from '../popupBasic/Modal';
import './PopupPatientMassage.css';
const PopupPatientMassage = ({
    open,
    onClose,
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            Wizyta zaakceptowana
        </Modal>
    )
}

export default PopupPatientMassage;
