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
    const [isPopupInformationAboutVisit, setIsPopupInformationAboutVisit] = useState(false);
    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container className='col-12 text-center'>
                <Row>
                    <Col className='col-12 text-center text-primary'>
                        {dateToVisitDayVew}
                    </Col>
                    {visitList.map((visit) => {
                        return (
                            <Col key={visit.visitId}
                                className="col-12"
                                onDoubleClick={() => {

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
            {console.log(visitList)}
            { /*<PopupInformationAboutVisit
           isDoctor={isDoctor}
            open={isPopupInformationAboutVisit}
            onClose={setIsPopupInformationAboutVisit(false)}
            visitInformation={visitList[0]}
            onAcceptVisit={() => {
                setIsPopupInformationAboutVisit(false)
              }}
            />*/}
            
        </Modal>
    )
}

export default PopupDayVew;
