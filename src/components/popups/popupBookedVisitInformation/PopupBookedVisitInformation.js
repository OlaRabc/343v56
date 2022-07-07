import Modal from '../popupBasic/Modal';
import './PopupBookedVisitInformation.css';
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
