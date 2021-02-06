import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../../utils/api";
import Token from "../../utils/Token";

function Product() {
  const { storeId, productId } = useParams();
  const { allStores } = useSelector((state) => state.stores);
  const currentStore = allStores.filter((store) => store.id == storeId)[0];
  const product = currentStore.Products.filter(
    (product) => product.id == productId
  )[0];
  const [amount, setAmount] = useState(1);

  const add = () => {
    const newAmount = amount + 1;
    if (newAmount > product.stock) {
      return alert("Exceeds stock limit of this item");
    }
    setAmount(newAmount);
  };

  const subtract = () => {
    const newAmount = amount - 1;
    if (newAmount < 0) {
      return;
    }
    setAmount(newAmount);
  };

  const handleAddToCart = () => {
    if (amount > product.stock) {
      return alert("Exceeds stock limit of this item");
    }
    let { id, price } = product;
    let userid = Token.getId();
    api.addItem({ quantity: amount, userid, productid: id, price }).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <a name="#"></a>
      <div className="container mt-5">
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
                  id="subtract"
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
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
