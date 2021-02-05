import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Preview from "../../components/Preview";
import api from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getAllStores } from "../../redux/actions/stores.actions";

function MarketPlace() {
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.stores);

  useEffect(() => {
    api
      .landingStores()
      .then((allStores) => {
        console.log(allStores.data);
        dispatch(getAllStores(allStores.data));
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(stores);
  if (!stores.allStores) {
    console.log(stores);
    return <h1>Loading...</h1>;
  }
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        {stores.allStores.map(store => (
          <Col>
            <Preview 
                type="store"
              image={store.background_image}
              name={store.store_name}
              key={store.id}
              storeId={store.id}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default MarketPlace;
