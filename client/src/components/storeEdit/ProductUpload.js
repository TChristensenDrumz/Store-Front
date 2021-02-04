import React from "react";

function ProductUpload() {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="list-product-upload"
        role="tabpanel"
        aria-labelledby="list-settings-list"
      >
        <form className="col-12 p-4" id="prod-form">
          <div className="form-group" id="product-form">
            <label for="exampleFormControlInput1">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Name"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="$"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Inventory</label>
            <input
              type="text"
              className="form-control"
              id="inventory"
              placeholder="#"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="productDescription"
              placeholder="Product description"
              rows="3"
            ></textarea>
          </div>

          <label for="exampleFormControlInput1">Product Image</label>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="prod-image-upload"
              />
              <label
                className="custom-file-label"
                for="prod-image-upload"
                aria-describedby="inputGroupFileAddon02"
                id="prod-image-file"
              >
                Choose file
              </label>
            </div>
            {/* {{!-- <div className="input-group-append">
                                        <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                    </div> --}} */}
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

export default ProductUpload;
