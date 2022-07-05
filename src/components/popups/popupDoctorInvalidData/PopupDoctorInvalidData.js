import Modal from '../popupBasic/Modal';
import './PopupDoctorInvalidData.css';
const PopupDoctorInvalidData = ({
    open,
    onClose,
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            Błędne Dane
        </Modal>
    )
}

export default PopupDoctorInvalidData;
