import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";
import "./Preview.css";

function Preview({image, name, storeId, productId, type}) {
  const history = useHistory();

  const goToPage = () => {
    if (type === "store") {
    history.push(`/storefront/${storeId}`);
    } else {
      history.push(`/storefront/${storeId}/${productId}`);
    };
  };
  return (
    <div className="d-flex justify-content-center m-5" onClick={goToPage}>
      <Card style={{ width: "15vw", minWidth: "200px" }}>
        <Image variant="top" src={image} fluid />
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Preview;
