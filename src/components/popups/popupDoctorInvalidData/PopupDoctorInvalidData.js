import './PopupDoctorInvalidData.css';
import Modal from '../popupBasic/Modal';

const PopupDoctorInvalidData = ({
    open,
    onClose,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            Błędne Dane
        </Modal>
    )
}

export default PopupDoctorInvalidData;
