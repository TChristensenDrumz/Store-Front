import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../utils/api";
import Token from "../../utils/Token";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

function Product() {
  const history = useHistory();
  const userAuth = Token.authenticate();
  const { productId } = useParams();
  const { currentStore } = useSelector((state) => state.stores);
  const product = currentStore.Products.filter(
    (product) => product.id == productId
  )[0];
  const [amount, setAmount] = useState(1);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleClose = () => {
    setShow(false);
    if (redirect) {
      history.push("/customer-login");
    };
  };

  const handleShow = (loggedIn = true) => {
    setShow(true);
    if (!loggedIn) {
      setRedirect(true);
    };
  };

  const add = () => {
    const newAmount = amount + 1;
    if (newAmount > product.stock) {
      setMessage("Exceeds stock limit of this item");
      handleShow();
    };
    setAmount(newAmount);
  };

  const subtract = () => {
    const newAmount = amount - 1;
    if (newAmount < 1) {
      return;
    }
    setAmount(newAmount);
  };

  const handleAddToCart = () => {
    if (!userAuth) {
      setMessage("Please sign in or create an account to add items to your cart");
      return handleShow(false);
    };
    if (amount > product.stock) {
      setMessage("Exceeds stock limit of this item");
      return handleShow();
    }
    let { id, price } = product;
    let userid = Token.getId();
    api.addItem({ quantity: amount, userid, productid: id, price }).then((result) => {
      setMessage("Item added to cart!");
      handleShow();
    });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <a name="#"></a>
      <div className="container mt-5" style={{color: currentStore.body_color}}>
        <div className="row p-5">
          <div className="col-md-6 col-12">
            <img src={product.image} height="300px"></img>
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              <h3>{product.name}</h3>
            </div>

            <div className="row">
              <h6>{product.price}</h6>
            </div>

            <div className="row">
              <p>{product.description}</p>
            </div>
            <div></div>
            <div className="row pb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control text-center"
                  value={amount}
                  aria-label="Recipient's username with two button addons"
                  onChange={(e) => setAmount(e.target.value)}
                ></input>
                <button
                  className="btn btn-outline-secondary"
                  id="add"
                  type="button"
                  onClick={add}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </button>
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={subtract}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="row pt-3">
              <button
                type="button"
                className="btn btn-lg border btn-dark"
                style={{
                  color: currentStore.footer_color,
                  backgroundColor: currentStore.accent_color
                }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
