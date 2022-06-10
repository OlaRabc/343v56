import Modal from '../popupBasic/Modal';
import './PopupInformationAboutVisit.css';
import { Container, Row, Col } from 'react-bootstrap';
const PopupInformationAboutVisit = ({
    open,
    onClose,
    visitInformation
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container>
                <Row>
                    <Col
                        className={visitInformation.visitStatus === "freeVisit" ? "btn btn-secondary col-12" :
                            (visitInformation.visitStatus === "acceptedVisit" ? "btn btn-success col-12" :
                                (visitInformation.visitStatus === "toAcceptVisit" ? "btn btn-warning col-12"
                                    : "btn btn-danger col-12"))
                        }>
                        {visitInformation.firstName + " " + visitInformation.lastName}
                    </Col>
                </Row>
                <Row>
                    <Col className="col-5 offset-md-2 my-2">
                        Początek wizyty:
                    </Col>
                    <Col className="col-5 my-4 my-md-2">
                        {visitInformation.timeStart}
                    </Col>
                    <Col className="col-5 offset-md-2 my-2">
                        Koniec wizyty:
                    </Col>
                    <Col className="col-5 my-4 my-md-2">
                        {visitInformation.timeEnd}
                    </Col>
                    <Col className="col-5 offset-md-2 my-2">
                        Czas wizyty:
                    </Col>
                    <Col className="col-5 my-4 my-md-2">
                        {visitInformation.visitTime}
                    </Col>
                    <Col className="col-5 offset-md-2 my-2">
                        Mail:
                    </Col>
                    <Col className="col-5 my-4 my-md-2">
                        {visitInformation.mail}
                    </Col>
                    <Col className="col-5 offset-md-2 my-2">
                        Telefon:
                    </Col>
                    <Col className="col-5 my-4 my-md-2">
                        {visitInformation.phoneNumber}
                    </Col>
                    <Col className="col-5 offset-md-2 my-2">
                        Rodzaj Wizyty:
                    </Col>
                    <Col className="col-5 my-4 my-md-2">
                        {visitInformation.visitType}
                    </Col>
                </Row>
                <button type="button" className="btn btn-primary col-12   mt-3" onClick={onClose}>
                    Anuluj
                </button>
                <button type="button" className="btn btn-primary col-12  mt-3">
                    Odwołaj wizytę
                </button>
                {visitInformation.visitStatus === "toAcceptVisit" ? (
                    <button type="button" className="btn btn-primary col-12  mt-3">
                        Zaakceptuj Wizytę
                    </button>
                ) : ""}
            </Container>
        </Modal>
    )
}

export default PopupInformationAboutVisit;
