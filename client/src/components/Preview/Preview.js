import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentStore } from "../../redux/actions/stores.actions";
import "./Preview.css";

function Preview({image, name, storeId, productId, type}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allStores } = useSelector(state => state.stores);

  const goToPage = () => {
    if (type === "store") {
      console.log("you clicked a preview card")
      let currentStore = allStores.filter(store => store.id == storeId)[0];
      dispatch(getCurrentStore(currentStore));
    history.push(`/storefront/${storeId}`);
    } else {
      history.push(`/storefront/${storeId}/${productId}`);
    };
  };

  const styles = {
    image: {
      height: "300px",
      width: "14.921vw",
      minWidth: "248px"
    }
  }
  return (
    <div className="d-flex justify-content-center m-5" onClick={goToPage}>
      <Card style={{ width: "15vw", minWidth: "250px" }}>
        <Image variant="top" src={image} style={styles.image}/>
        <Card.Body>
          <Card.Title style={{textAlign: "center"}}>{name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Preview;
