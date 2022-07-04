import './HarmonogramVisitPlanning.css';
import { Container, Row, Col } from 'react-bootstrap';

function HarmonogramVisitPlanning({
  isDoctor,
  doctorId
}) {
  return (
    <Container className="col-12" >
      <Row className="col-12 p-1 patent-operation-vew" >
        <Col className="col-12 col-md-5 my-3" >
          wiele
        </Col>
      </Row>

      <Row>
        <Col className="col-12 my-3 " >
          <button type="button" className="btn btn-primary col-12 p-2" onClick={() => {
            console.log("paln")
          }}>
            Planuj
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default HarmonogramVisitPlanning;
