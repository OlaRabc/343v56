import Modal from '../popupBasic/Modal';
import './PopupDoctorData.css';
import { AiOutlineClose } from "react-icons/ai";
import { Container, Row, Col } from 'react-bootstrap';
const PopupDoctorData = ({
    doctor,
    open,
    onClose,
    onCancelButtonClick
}) => {


    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container className="col-12 doctor-popup">
                <Row className="col-12">
                    <Col className="col-12 m-2" >
                        {"Dr." + doctor.firstName + " " + doctor.lastName}
                    </Col>
                    <Col className="col-12 m-2">
                        {"pwz "+doctor.pwz}
                    </Col>
                    <Col className="col-12 m-2">
                        {doctor.city.name + ", " + doctor.street + " " + doctor.localNumber}
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

export default PopupDoctorData;
