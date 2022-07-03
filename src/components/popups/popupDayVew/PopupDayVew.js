import Modal from '../popupBasic/Modal';
import './PopupDayVew.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PopupInformationAboutVisit from "../../popups/popupInformationAboutVisit/PopupInformationAboutVisit";
const PopupDayVew = ({
    isDoctor,
    userId,
    visitList,
    dateToVisitDayVew,
    open,
    onClose,
    onConfirmButtonClick,
    onCancelButtonClick
}) => {
    const visitObjectPrototype = {
        visitId: null,
        visitStatusId: null,
        visitDate: null,
        visitStart: null,
        visitEnd: null,
        doctor: {
            doctorId: null,
            firstName: null,
            lastName: null,
            pwz: null,
            street: null,
            localNumber: null,
            city: {
                cityId: null,
                name: null
            }
        },
        patient: {
            patientId: null,
            firstName: null,
            lastName: null,
            mail: null,
            phoneNumber: null,
            city: {
                cityId: null,
                name: null
            }
        },
        specialization: {
            specializationId: 1,
            name: null
        }
    }

    const [isPopupInformationAboutVisit, setIsPopupInformationAboutVisit] = useState(false);

    const [visitToShow, setVisitToShow] = useState(visitObjectPrototype);

    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container className='col-12 text-center'>
                <Row>
                    <Col className=' col-12 p-2 mb-3 text-center bg-primary text-light '>
                        {dateToVisitDayVew}
                    </Col>
                    {visitList.map((visit) => {
                        return (
                            <Col key={visit.visitId}
                                className={visit.visitStatusId === 1 ? "btn btn-secondary col-12 my-1 " :
                                    (visit.visitStatusId === 3 ? "btn btn-success col-12 my-1" :
                                        (visit.visitStatusId === 2 ? "btn btn-warning col-12 my-1"
                                            : "btn btn-danger col-12 my-1"))
                                }
                                onDoubleClick={() => {
                                    setIsPopupInformationAboutVisit(true)
                                    setVisitToShow(visit)
                                }}>
                                {visit.specialization.name + " " + visit.visitStart}
                            </Col>
                        )
                    })}
                    <Col>
                        <button type="button" className="btn btn-primary col-12   mt-3" onClick={onClose}>
                            Anuluj
                        </button>
                    </Col>
                </Row>
            </Container>
            <PopupInformationAboutVisit
                isDoctor={isDoctor}
                open={isPopupInformationAboutVisit}
                onClose={() => setIsPopupInformationAboutVisit(false)}
                visitInformation={visitToShow}
            //onAcceptVisit={()=>{console.log("dd")}}
            //onRejectVisit={()=>{console.log("dd")}}
            //onCancelVisit={()=>{console.log("dd")}}
            />
        </Modal>
    )
}

export default PopupDayVew;

