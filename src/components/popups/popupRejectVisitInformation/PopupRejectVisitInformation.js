import Modal from '../popupBasic/Modal';
import './PopupRejectVisitInformation.css';
const PopupRejectVisitInformation = ({
    open,
    onClose,
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            Wizyta odrzucona
        </Modal>
    )
}

export default PopupRejectVisitInformation;
