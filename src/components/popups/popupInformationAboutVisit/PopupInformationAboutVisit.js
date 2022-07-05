import Modal from '../popupBasic/Modal';
import moment from "moment";
import React, { useState, useEffect } from 'react';
import PopupDoctorData from "./../popupDoctorData/PopupDoctorData";
import './PopupInformationAboutVisit.css';
import { Container, Row, Col } from 'react-bootstrap';
const PopupInformationAboutVisit = ({
    isDoctor,
    open,
    onClose,
    visit,
    onAcceptVisit,
    onRejectVisit,
    onCancelVisit,
    onDeleteVisit
}) => {
    const actualDate = moment(new Date()).format("YYYY-MM-DD");
    const [isPopupDoctorData, setIsPopupDoctorData] = useState(0);
    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container>
                <Row>
                    <Col
                        className={visit.visitStatusId === 1 ?
                            "btn btn-secondary col-12" :
                            (visit.visitStatusId === 3 ?
                                "btn btn-success col-12" :
                                (visit.visitStatusId === 2
                                    ? "btn btn-warning col-12"
                                    : "btn btn-danger col-12"))
                        }
                        onClick={() => {
                            setIsPopupDoctorData(true)
                        }}>
                        {!isDoctor ?
                            "Dr " + visit
                                .doctor.firstName + " " + visit
                                    .doctor.lastName
                            : (visit.patient == null ?
                                "Wolna Wizyta" :
                                visit.patient.firstName + " " + visit
                                    .patient.lastName


                            )}
                    </Col>
                </Row>
                <Row >
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Data wizyty:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {moment(visit
                            .visitDate).format("DD.MM.YYYY")}
                    </Col>
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Początek wizyty:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {visit
                            .visitStart}
                    </Col>
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Koniec wizyty:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {visit
                            .visitEnd}
                    </Col>
                    <Col className="col-12 col-md-5 offset-md-2 my-2">
                        Specjalizacja:
                    </Col>
                    <Col className="col-12 col-md-5 my-4 my-md-2">
                        {visit
                            .specialization.name}
                    </Col>

                    {visit.patient === null ?
                        "" :
                        <>
                            <Col className="col-12 col-md-5 offset-md-2 my-2">
                                Telefon:
                            </Col>
                            <Col className="col-12 col-md-5 my-4 my-md-2">
                                {visit
                                    .patient.phoneNumber}
                            </Col>
                        </>
                    }


                </Row>
                <button type="button" className="btn btn-primary col-12   mt-3" onClick={onClose}>
                    Anuluj
                </button>

                {visit
                    .visitStatusId === 2 && isDoctor && visit.visitDate > actualDate ? ( /*doctor? */
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
                        visit.visitStatusId !== 4
                            && visit.visitStatusId !== 5
                            && visit.visitStatusId !== 1
                            && visit.visitDate > actualDate ?
                            <button type="button" className="btn btn-primary col-12  mt-3" onClick={onCancelVisit}>
                                {/*visitStatus=free     cancel*/}
                                Odwołaj wizytę
                            </button> : ""
                    )}
                {isDoctor && visit.visitDate > actualDate ?
                    <button type="button" className="btn btn-primary col-12  mt-3" onClick={onDeleteVisit}>
                        {/*visitStatus=free     cancel*/}
                        Usuń wizytę
                    </button>
                    : ""}
                {isDoctor && visit.visitDate > actualDate && visit.visitStatusId === 4 ?
                    <button type="button" className="btn btn-primary col-12  mt-3" onClick={onRejectVisit}> 
                        {/*patient removed visit*/}
                        Odwołaj wizytę 
                    </button> :
                    ""}
            </Container>
            <PopupDoctorData
                doctor={visit
                    .doctor}
                open={isPopupDoctorData}
                onClose={() => { setIsPopupDoctorData(false) }}
            />
        </Modal>
    )
}

export default PopupInformationAboutVisit;
