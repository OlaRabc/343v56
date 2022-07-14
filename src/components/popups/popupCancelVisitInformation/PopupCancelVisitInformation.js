import Modal from '../popupBasic/Modal';

const PopupCancelVisitInformation = ({
    open,
    onClose,
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}>
            Wizyta odwołana
        </Modal>
    )
}

export default PopupCancelVisitInformation;
