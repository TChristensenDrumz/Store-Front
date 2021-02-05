import React from "react";
import CartItem from "../../components/CartItem";
import { PayPalButton } from "react-paypal-button-v2";


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
      <div className="row align-items-center pt-3 pb-3">
        <div className="col-12">
          <h5 className="text-right">Subtotal: $300.00</h5>
        </div>
      </div>

      <div className="row">
        
        <div 
        className="pr-3"
        style={{
          width:"200px",
          marginLeft:"auto"
          }}>
       
          <PayPalButton 
            
            
            style={{
              
              label:"checkout",
              layout:"horizontal",
              color: "black",
              tagline:false,
              height:45,
            }}
            amount="0.01"
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onApprove={(data,actions)=>{
            }}
            onSuccess={(details, data) => {
              console.log(details,data)
             
              alert("Transaction completed by " + details.payer.name.given_name);
              
              // OPTIONAL: Call your server to save the transaction
            // return fetch("/paypal-transaction-complete", {
            //     method: "post",
            //     body: JSON.stringify({
            //       orderID: data.orderID
            //     })
            //   });
            }}
            options = {{clientId: "AfhjZ5Uut9acoZSMszE4Zqo2-V_E6RashVGEW1CNegRN2dbXzgEMjm7h5yDMkqt78jIsdx0KsxRORjhC", disableFunding:"credit"}}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;
