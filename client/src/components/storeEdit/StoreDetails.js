import React from "react";

function StoreDetails() {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="list-store"
        role="tabpanel"
        aria-labelledby="list-home-list"
      >
        <form className="col-12 p-4" id="store-details-form">
          <div className="form-group">
            <label for="exampleFormControlInput1">Store Name</label>
            <input
              type="storeName"
              className="form-control"
              id="storeName"
              placeholder="Store Name"
              value="{{ name }}"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Store Tagline</label>
            <input
              type="storeDetails"
              className="form-control"
              id="storeTagline"
              placeholder="Store Tagline"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">About</label>
            <textarea
              className="form-control"
              id="aboutDetails"
              placeholder="About Us"
              rows="3"
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Store Address</label>
            <input
              type="storeAddress"
              className="form-control"
              id="storeAddress"
              placeholder="Store Address"
            />
          </div>

          <div className="text-right">
            <button type="submit" className="btn button-color">
              Update
            </button>
          </div>

          <div className="text-right updateStatus"></div>
        </form>
      </div>
    </div>
  );
}

export default StoreDetails;
