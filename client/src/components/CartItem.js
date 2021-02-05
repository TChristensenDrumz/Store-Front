import React from "react";

function CartItem(props) {
  let name = props.name
  let img = props.img
  let price = props.price
  return (
    <>
      <div className="row align-items-center d-flex justify-content-between p-3">
        <div className="col-1 text-left">
          <i className="fas fa-times"></i>
        </div>
        <div class="media align-items-center col-6 p-2">
          <img src={img} className="mr-3" alt="..." />
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
                value="3"
              />
            </div>
          </div>
        </div>
        <div className="col-2 text-right">{"$"+price}</div>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
