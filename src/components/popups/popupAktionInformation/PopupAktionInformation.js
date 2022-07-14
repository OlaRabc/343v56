import './PopupAktionInformation.css';
import Modal from '../popupBasic/Modal';
import moment from "moment";
import { Container, Row, Col } from 'react-bootstrap';
const PopupAktionInformation = ({
    open,
    onClose,
    message
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container className='col-12 text-center'>
                {message}
            </Container>
        </Modal>
    )
}

export default PopupAktionInformation;

