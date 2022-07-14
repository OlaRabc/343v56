import Modal from '../popupBasic/Modal';
import moment from "moment";
import { visitObjectPrototype } from "./../../util/constantObject";
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
    onCancelVisit,
}) => {
    const [visitToShow, setVisitToShow] = useState(visitObjectPrototype);

    const [isPopupInformationAboutVisit, setIsPopupInformationAboutVisit] = useState(false);

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <Container className='col-12 text-center'>
                <Row>
                    <Col className=' col-12 p-2 mb-3 text-center bg-primary text-light '>
                        {moment(dateToVisitDayVew).format("DD.MM.YYYY")}
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
                visit={visitToShow}
                onCancelVisit={onCancelVisit}
            />
        </Modal>
    )
}

export default PopupDayVew;

