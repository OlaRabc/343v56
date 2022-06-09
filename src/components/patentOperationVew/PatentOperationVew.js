import './PatentOperationVew.css';
import { Container, Row, Col } from 'react-bootstrap';

function PatentOperationVew({
  onCalendarVewClick,
  onPatientVisitRejestrationFormVew
}) 
{
  return (
    <Container className="p-1 m-1 patent-operation-vew ">
      <Row className="m-1 m-md-5">
        <Col className="m-1 ">
          <button type="button" className="btn btn-primary col-12 col-md-5 " 
           onClick={onPatientVisitRejestrationFormVew}>
            Zarejestruj się
          </button>

          <button type="button" className="btn btn-primary col-12  col-md-5 offset-md-2 mt-4 mt-md-0" 
           onClick={onCalendarVewClick}>
          Kalendarz wizyt
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default PatentOperationVew;
