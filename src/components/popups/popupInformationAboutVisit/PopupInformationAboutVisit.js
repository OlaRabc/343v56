import Modal from '../popupBasic/Modal';
import './PopupInformationAboutVisit.css';
import { Container, Row, Col } from 'react-bootstrap';
const PopupInformationAboutVisit = ({
    isDoctor,
    open,
    onClose,
    visitInformation,
    onAcceptVisit,
    onRejectVisit
}) => {
    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container>
                <Row>
                    <Col
                        className={visitInformation.visitStatusId === 1 ? "btn btn-secondary col-12" :
                            (visitInformation.visitStatusId === 3 ? "btn btn-success col-12" :
                                (visitInformation.visitStatusId === 2 ? "btn btn-warning col-12"
                                    : "btn btn-danger col-12"))
                        }
                        onClick={()=>{
                            
                        }}>
                        {!isDoctor?"Dr. "+visitInformation.doctor.firstName+" "+visitInformation.doctor.lastName:visitInformation.patient.firstName + " " + visitInformation.patient.lastName}
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Data wizyty:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {visitInformation.visitDate}
                    </Col>
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Początek wizyty:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {visitInformation.visitStart}
                    </Col>
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Koniec wizyty:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {visitInformation.visitEnd}
                    </Col>
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Specjalizacja:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {visitInformation.specialization.name}
                    </Col>
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Telefon:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {visitInformation.patient.phoneNumber}
                    </Col>
                    
                </Row>
                <button type="button" className="btn btn-primary col-12   mt-3" onClick={onClose}>
                    Anuluj
                </button>
                
                {visitInformation.visitStatus === "toAcceptVisit" && isDoctor? (
                    <>
                    
                        <button type="button" className="btn btn-primary col-12  mt-3" onClick={onAcceptVisit}>
                            {/*change visitSttus=green*/}
                            Zaakceptuj Wizytę
                        </button>
                        <button type="button" className="btn btn-primary col-12  mt-3" onClick={onRejectVisit}>
                            Odrzuć wizytę {/* reject */}
                        </button>
                    </>
                ) :
                    (
                        <button type="button" className="btn btn-primary col-12  mt-3" >
                            {/*visitStatus=free     cancel*/}
                            Odwołaj wizytę
                        </button>
                    )}
            </Container>
        </Modal>
    )
}

export default PopupInformationAboutVisit;
