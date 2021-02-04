import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

function Preview() {
  return (
    <div className="d-flex justify-content-center m-5">
      <Card style={{ width: "15vw" }}>
        <Image variant="top" src="https://placehold.it/600x600" fluid />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>Card Title</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Preview;
