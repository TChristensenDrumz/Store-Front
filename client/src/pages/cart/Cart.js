import React from "react";
import CartItem from "../../components/CartItem";

function Cart() {
  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <div className="row pl-3 pr-3 mb-1">
        <p className="col-1 m-0">Item</p>
        <p className="col-6 m-0"></p>
        <p className="col-3 m-0 text-right">Quantity</p>
        <p className="col-2 m-0 text-right">Price</p>
      </div>
      <hr />
      <CartItem />
      <CartItem />
      <CartItem />
      <div className="row align-items-center p-3">
        <div className="col-12">
          <h5 className="text-right">Subtotal: $300.00</h5>
        </div>
      </div>

      <div className="row align-items-center p-3">
        <div className="col-12 text-right p-0">
          <button
            type="button"
            className="btn btn-dark"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
