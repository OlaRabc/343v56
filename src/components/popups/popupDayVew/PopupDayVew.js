import Modal from '../popupBasic/Modal';
import './PopupDayVew.css';
import { AiOutlineClose } from "react-icons/ai";
import { Container, Row, Col } from 'react-bootstrap';
import { getVisitsByPatientIdAndDate } from "./../../../apiOperation/getOperaton/GetOperaton";
import { useEffect, useState } from 'react';
const PopupDayVew = ({
    isDoctor,
    userId,
    visitDate,
    open,
    onClose,
    onConfirmButtonClick,
    onCancelButtonClick
}) => {
    const [visitList, setVisitList] = useState([])
    

    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Container>
                <Row>
                    {console.log(visitList)}
                    {console.log(userId)}
                    {console.log(visitDate)}
                    <Col>
                        {console.log(visitDate)}
                        <button type="button" className="btn btn-primary col-12   mt-3" onClick={onClose}>
                            Anuluj
                        </button>
                    </Col>
                </Row>
            </Container>
        </Modal>
    )
}

export default PopupDayVew;
