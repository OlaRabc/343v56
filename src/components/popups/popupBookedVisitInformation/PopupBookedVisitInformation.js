import './PopupBookedVisitInformation.css';
import Modal from '../popupBasic/Modal';

const PopupBookedVisitInformation = ({
    open,
    onClose,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}>
            Wizyta zarezerwowana
        </Modal>
    )
}

export default PopupBookedVisitInformation;
