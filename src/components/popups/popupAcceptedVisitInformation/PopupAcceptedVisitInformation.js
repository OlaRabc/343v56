import Modal from '../popupBasic/Modal';
import './PopupAcceptedVisitInformation.css';
import { AiOutlineClose } from "react-icons/ai";
const PopupAcceptedVisitInformation = ({
    open,
    onClose,
    onConfirmButtonClick,
    onCancelButtonClick
}) => {


    return (
        <Modal
        open={open}
        onClose={onClose}>
         < AiOutlineClose/>
        </Modal>
    )
}

export default PopupAcceptedVisitInformation;
