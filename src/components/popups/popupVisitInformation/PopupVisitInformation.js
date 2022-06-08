import Modal from '../popupBasic/Modal';
import './PopupVisitInformation.css';
import { AiOutlineClose } from "react-icons/ai";
const PopupVisitInformation = ({
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

export default PopupVisitInformation;
