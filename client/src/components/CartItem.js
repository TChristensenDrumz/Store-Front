import React from "react";
import api from "../utils/api";
import { useHistory } from "react-router-dom";

function CartItem({name, img, price, id, setChange, quantity}) {
  const history = useHistory();
  const handleItemDelete = () => {
    api.removeItem(id).then(result => {
      console.log(result);
      setChange(id);
    })
  }

  return (
    <div>
      <div className="row align-items-center d-flex justify-content-between p-3">
        <div className="col-1 text-left">
          <button style={{background: "none", border: "none"}} onClick={handleItemDelete}><i className="fas fa-times"></i></button>
        </div>
        <div class="media align-items-center col-6 p-2">
          <img src={img} className="mr-3" alt="..." height="75px"/>
          <div className="media-body">
            <h5 className="mt-0 ml-3">{name}</h5>
          </div>
        </div>
        <div className="col-3 text-center">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4">
              <input
                className="form-control form-control-sm text-center quantity"
                type="text"
                value={quantity}
              />
            </div>
          </div>
        </div>
        <div className="col-2 text-right">{"$"+price}</div>
      </div>
      <hr />
    </div>
  );
}

export default CartItem;
