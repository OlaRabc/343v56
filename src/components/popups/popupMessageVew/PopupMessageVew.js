import './PopupMessageVew.css';
import Modal from '../popupBasic/Modal';
import moment from "moment";
import { Container, Row, Col } from 'react-bootstrap';
const PopupMessageVew = ({
    open,
    onClose,
    messages
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container className='col-12 text-center'>
                <Row>
                    <Col>
                        messages
                    </Col>
                </Row>
            </Container>
        </Modal>
    )
}

export default PopupMessageVew;

