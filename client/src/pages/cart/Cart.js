import React, { useState, useEffect } from "react";
import CartItem from "../../components/CartItem";
import { PayPalButton } from "react-paypal-button-v2";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import Token from "../../utils/Token";
import api from "../../utils/api";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(null);
  const [change, setChange] = useState("");

  useEffect(() => {
    const userId = Token.getId();
    api.getCart(userId).then((result) => {
      console.log(result.data);
      let newTotal = 0;
      setCartItems(result.data);
      cartItems.forEach((item) => {
        newTotal += parseInt(item.Product.price) * parseInt(item.quantity);
      });
      console.log(newTotal);
      setTotal(newTotal);
    });
  }, [total]);

  useEffect(() => {
    let newTotal = 0;
    cartItems.forEach((item) => {
      newTotal += parseInt(item.Product.price) * parseInt(item.quantity);
    });
    console.log(newTotal);
    setTotal(newTotal);
    console.log(cartItems);
    if (change) {
      let id = change;
      let newItems = cartItems.filter((item) => item.id !== id);
      setCartItems(newItems);
    }
  }, [change]);

  // if (!total) {
  //   return <h1>Loading...</h1>;
  // }

  // let subTotal = 0
  // products.forEach(product=>{
  //   subTotal += product.price})

  return (
    <div>
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
            quantity = {product.quantity}
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

                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );

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
