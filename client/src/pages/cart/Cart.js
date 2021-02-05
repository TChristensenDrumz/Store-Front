import React from "react";
import CartItem from "../../components/CartItem";
import { PayPalButton } from "react-paypal-button-v2";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Cart() {
  let products = [
    {
      img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "Lego Heads1",
      price: 1000
    },
    {
      img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "Lego Heads2",
      price: 1000
    },
    {
      img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "Lego Heads13",
      price: 1000
    },
    {
      img: "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      name: "Lego Heads14",
      price: 1000
    }
  ]

  let subTotal = 0
  products.forEach(product=>{
    subTotal += product.price})

  return (
    <div>
    <Header/>
    <div className="container">
      <h2>Shopping Cart</h2>
      <div className="row pl-3 pr-3 mb-1">
        <p className="col-1 m-0">Item</p>
        <p className="col-6 m-0"></p>
        <p className="col-3 m-0 text-right">Quantity</p>
        <p className="col-2 m-0 text-right">Price</p>
      </div>
      <hr />
        
        {products.map(product => (
          <CartItem
            key = {product.name}
            price = {product.price}
            img = {product.img}
            name = {product.name}
            />
        ))}
      <div className="row align-items-center pt-3 pb-3">
        <div className="col-12">
          <h5 className="text-right">{"Subtotal: $"+ subTotal}</h5>
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
            amount={subTotal.toString()}
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
    <Footer/>
    </div>
  );
}

export default Cart;
