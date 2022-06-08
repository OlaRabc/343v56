import './PatentOperationVew.css';
import { Container, Row, Col } from 'react-bootstrap';

function PatentOperationVew({
  onCalendarVewClick
}) {
  return (
    <Container className="m-5 patent-operation-vew">
      <Row className="m-4" >
        <Col className="m-3">
          <button type="button" className="btn btn-primary col-12 col-md-5" 
           onClick={()=>{
            console.log("notNow 3")
          }}>
            Zarejestruj się
          </button>

          <button type="button" className="btn btn-primary col-12 col-md-5 offset-md-2" 
           onClick={onCalendarVewClick}>
          Kalendarz wizyt
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default PatentOperationVew;
