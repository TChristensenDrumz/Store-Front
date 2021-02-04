import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Preview from "../../components/Preview";

function SiteLanding() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col>
          <Preview />
        </Col>
        <Col>
          <Preview />
        </Col>
        <Col>
          <Preview />
        </Col>
      </Row>
    </Container>
  );
}

export default SiteLanding;
