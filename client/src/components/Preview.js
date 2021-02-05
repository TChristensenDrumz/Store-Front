import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

function Preview({image, name, id}) {
  const history = useHistory();

  const goToStore = () => {
    console.log(id)
    history.push(`/storefront/${id}`)
  }
  return (
    <div className="d-flex justify-content-center m-5" onClick={goToStore}>
      <Card style={{ width: "15vw" }}>
        <Image variant="top" src={image} fluid />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Preview;
