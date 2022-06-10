import './PatentOperationVew.css';
import { Container, Row, Col } from 'react-bootstrap';

function PatentOperationVew({
  onCalendarVewClick,
  onPatientVisitRejestrationFormVew
}) 
{
  return (
    <Container className="col-12 p-1 m-5 patent-operation-vew ">
      <Row className="col-12 m-1 m-md-5">
        <Col className="col-12 col-md-5 my-3 ">
          <button type="button" className="btn btn-primary col-12 p-2" 
           onClick={onPatientVisitRejestrationFormVew}>
            Zarejestruj się
          </button>
        </Col>
        <Col className="col-12  col-md-5 my-3 offset-md-1">
          <button type="button" className="btn btn-primary col-12 p-2" 
           onClick={onCalendarVewClick}>
          Kalendarz wizyt
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default PatentOperationVew;
