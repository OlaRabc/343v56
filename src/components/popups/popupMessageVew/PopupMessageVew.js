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
                        {messages.map((msg) => {
                            return (
                                <Col
                                    className="msg"
                                    key={msg.messageId}
                                >
                                    {"Status wizyty z dnia " + msg.visitDate + " został zmieniony na: "}
                                    {msg.newStatusId === 2 ? "do zaakceptowania" :
                                        msg.newStatusId === 3 ? "zaakceptowana" :
                                            "odwołana"}
                                    <hr />
                                </Col>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </Modal>
    )
}

export default PopupMessageVew;

