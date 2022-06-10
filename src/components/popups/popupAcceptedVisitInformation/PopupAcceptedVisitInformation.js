import Modal from '../popupBasic/Modal';
import './PopupAcceptedVisitInformation.css';
import { AiOutlineClose } from "react-icons/ai";
const PopupAcceptedVisitInformation = ({
    open,
    onClose, }) => {


    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            Wizyta zakceptowana
        </Modal>
    )
}

export default PopupAcceptedVisitInformation;
