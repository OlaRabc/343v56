import Modal from '../popupBasic/Modal';
import './PopupAcceptedVisitInformation.css';
const PopupAcceptedVisitInformation = ({
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

export default PopupAcceptedVisitInformation;
