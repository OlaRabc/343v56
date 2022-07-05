import Modal from '../popupBasic/Modal';
import './PopupPatientData.css';
import { AiOutlineClose } from "react-icons/ai";
import { Container, Row, Col } from 'react-bootstrap';
const PopupPatientData = ({
    patient,
    open,
    onClose,
    onCancelButtonClick
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container className="col-12 patient-popup">
                <Row className="col-12">
                    <Col className="col-12 m-2" >
                        {patient.firstName + " " + patient.lastName}
                    </Col>
                    <Col className="col-12 m-2">
                        mail: {patient.mail}
                    </Col>
                    <Col className="col-12 m-2">
                        Telrfon: {patient.phoneNumber}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button type="button" className="btn btn-primary col-12   mt-3" onClick={onClose}>
                            Anuluj
                        </button>
                    </Col>
                </Row>

            </Container>

        </Modal>
    )
}

export default PopupPatientData;
