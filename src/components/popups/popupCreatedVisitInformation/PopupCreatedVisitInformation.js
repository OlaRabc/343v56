import Modal from '../popupBasic/Modal';
import './PopupCreatedVisitInformation.css';
const PopupCreatedVisitInformation = ({
    open,
    onClose,
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            Wizyta utworzona.
        </Modal>
    )
}

export default PopupCreatedVisitInformation;
