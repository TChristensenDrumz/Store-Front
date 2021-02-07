import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Preview from "../../components/Preview/Preview";
import api from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getAllStores } from "../../redux/actions/stores.actions";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function MarketPlace() {
  const dispatch = useDispatch();
  const { allStores } = useSelector((state) => state.stores);
  let openStores = [];

  if (allStores) {
    openStores = allStores.filter((store) => store.Products.length > 0);
  }

  useEffect(() => {
    api
      .landingStores()
      .then((allStores) => {
        dispatch(getAllStores(allStores.data));
      })
      .catch((err) => console.log(err));
  }, []);

  if (!allStores) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Header />
      <Container fluid>
        <Row className="justify-content-md-center">
          {openStores.map((store) => (
            <Col>
              <Preview
                type="store"
                image={store.Products[0].image}
                name={store.store_name}
                key={store.id}
                storeId={store.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default MarketPlace;
