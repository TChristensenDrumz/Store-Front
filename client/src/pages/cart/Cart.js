import React, { useState, useEffect } from "react";
import CartItem from "../../components/CartItem";
import { PayPalButton } from "react-paypal-button-v2";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Token from "../../utils/Token";
import api from "../../utils/api";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(null);
  const [change, setChange] = useState("");
  const [itemAmount, setItemAmount] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const userId = Token.getId();
    api.getUsersCart(userId).then((result) => {
      console.log(result.data);
      if (result.data.total) {
        setTotal(result.data.total.toFixed(2));
      }
      setCartItems(result.data.items);
      console.log(cartItems)
    });
  }, []);

  useEffect(() => {
    if (change) {
      let { id, price } = change;
      let deletedItem = cartItems.filter((item) => item.id == id)[0];
      let newItems = cartItems.filter((item) => item.id !== id);
      setCartItems(newItems);
      let newTotal = total - (price * deletedItem.quantity);
      setTotal(newTotal.toFixed(2));
      setChange("");
    }
    if (itemAmount) {
      let { newAmount, id, setAmount } = itemAmount;
      let item = cartItems.filter((item) => item.id == id)[0];
      if (newAmount > item.Product.stock) {
        newAmount = item.Product.stock;
        setAmount(newAmount);
        setMessage(`Only ${newAmount} of this item currently in stock`);
        handleShow();
      };
      let newTotal = total - item.Product.price * item.quantity;
      item.quantity = newAmount;
      newTotal += item.Product.price * item.quantity;
      setTotal(newTotal.toFixed(2));
      setItemAmount("");
    }
  }, [change, itemAmount]);

  const handlePayPalSuccess = details => {
    setMessage("Transaction completed by " + details.payer.name.given_name);
    handleShow();
  };

  if (!total || !cartItems || cartItems.length === 0) {
    return (
      <>
        <Header />
        <div className="container">
          <h2>Shopping Cart</h2>
          <div className="mt-5 mb-5 text-center">
            <h4 className="mb-5">Cart is empty</h4>
            <a href="/marketplace">Return to Marketplace</a>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Store Front</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <div className="container">
        <h2>Shopping Cart</h2>
        <div className="row pl-3 pr-3 mb-1">
          <p className="col-1 m-0">Item</p>
          <p className="col-6 m-0"></p>
          <p className="col-3 m-0 text-right">Quantity</p>
          <p className="col-2 m-0 text-right">Price</p>
        </div>
        <hr />

        {cartItems.map((product) => (
          <CartItem
            key={product.id}
            price={product.Product.price}
            img={product.Product.image}
            name={product.Product.name}
            id={product.id}
            setChange={setChange}
            quantity={product.quantity}
            setItemAmount={setItemAmount}
          />
        ))}
        <div className="row align-items-center pt-3 pb-3">
          <div className="col-12">
            <h5 className="text-right">Subtotal: ${total}</h5>
          </div>
        </div>

        <div className="row">
          <div
            className="pr-3"
            style={{
              width: "200px",
              marginLeft: "auto",
            }}
          >
            <PayPalButton
              style={{
                label: "checkout",
                layout: "horizontal",
                color: "black",
                tagline: false,
                height: 45,
              }}
              amount={total}
              // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
              onApprove={(data, actions) => {}}
              onSuccess={(details, data) => {
                console.log(details, data);
                handlePayPalSuccess(details);

                // OPTIONAL: Call your server to save the transaction
                // return fetch("/paypal-transaction-complete", {
                //     method: "post",
                //     body: JSON.stringify({
                //       orderID: data.orderID
                //     })
                //   });
              }}
              options={{
                clientId:
                  "AfhjZ5Uut9acoZSMszE4Zqo2-V_E6RashVGEW1CNegRN2dbXzgEMjm7h5yDMkqt78jIsdx0KsxRORjhC",
                disableFunding: "credit",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
