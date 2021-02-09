import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentStore, getOwnerStore } from "../../redux/actions/stores.actions";
import api from "../../utils/api";
import Alert from "../Alert";

function ProductUpload() {
  const dispatch = useDispatch();
  const { ownerStore } = useSelector((state) => state.stores);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleProductSubmit = (event) => {
    event.preventDefault();
    let fd = new FormData();
    fd.append("file", image);
    api
      .createProduct({
        StoreId: ownerStore.id,
        name,
        price,
        stock,
        description,
      })
      .then((productData) => {
        console.log(productData);
        api
          .uploadImage("prod-image", productData.data.id, fd)
          .then((result) => {
            console.log(result);
            api
              .getStoreByOwner(ownerStore.UserId)
              .then((data) => {
                dispatch(getOwnerStore(data.data));
                dispatch(getCurrentStore(data.data));
                handleShow();
                setName("");
                setPrice("");
                setStock("");
                setDescription("");
                setImage("");
              })
              .catch((err) => console.log(err));
          });
      });
  };

  return (
    <div>
      <Alert 
        show = {show}
        handleClose = {handleClose}
        title = {"Store Editor"}
        message = {"Your product has been uploaded!"}
      />
      <div
        className="tab-pane fade show active"
        id="list-product-upload"
        role="tabpanel"
        aria-labelledby="list-settings-list"
      >
        <form
          className="col-12 p-4"
          id="prod-form"
          onSubmit={handleProductSubmit}
        >
          <div className="form-group" id="product-form">
            <label for="exampleFormControlInput1">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="$"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Inventory</label>
            <input
              type="text"
              className="form-control"
              id="inventory"
              placeholder="#"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea
              className="form-control"
              id="productDescription"
              placeholder="Product description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <label for="exampleFormControlInput1">Product Image</label>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="prod-image-upload"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <label
                className="custom-file-label"
                for="prod-image-upload"
                aria-describedby="inputGroupFileAddon02"
                id="prod-image-file"
              >
                {!image.name? "Choose File" :image.name}
              </label>
            </div>
            {/* {{!-- <div className="input-group-append">
                                        <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                    </div> --}} */}
          </div>

          <div className="text-right">
            <button type="submit" className="btn btn-dark">
              Add Product
            </button>
          </div>

          <div className="text-right updateStatus"></div>
        </form>
      </div>
    </div>
  );
}

export default ProductUpload;
