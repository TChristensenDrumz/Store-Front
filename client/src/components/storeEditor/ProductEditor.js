import React, { useState } from "react";
import api from "../../utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getOwnerStore } from "../../redux/actions/stores.actions";
import Modal from "react-bootstrap/Modal";

function ProductEditor({ image, name, id }) {
  const dispatch = useDispatch();
  const { ownerStore } = useSelector((state) => state.stores);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editStock, setEditStock] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editImage, setEditImage] = useState("");
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);

  const handleProductEdit = (event) => {
    event.preventDefault();
    let fd = new FormData();
    fd.append("file", editImage);
    api
      .updateProduct(id, {
        name: editName,
        price: editPrice,
        stock: editStock,
        description: editDescription,
      })
      .then((productData) => {
        console.log(productData);
        if (editImage) {
          api.uploadImage("prod-image", ownerStore.id, fd).then((result) => {
            console.log(result);
            setOwnerStore();
          });
        } else {
          setOwnerStore();
        }
      });
  };

  const setOwnerStore = () => {
    api
      .getStoreByOwner(ownerStore.UserId)
      .then((data) => {
        dispatch(getOwnerStore(data.data));
        setUpdate(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteProduct = () => {
    api.deleteProduct(id).then((result) => {
      api.getStoreByOwner(ownerStore.UserId).then((data) => {
        dispatch(getOwnerStore(data.data));
      });
    });
  };

  const handleEdit = () => {
    setShow(true);
    api.getSingleProduct(id).then((result) => {
      setUpdate(false);
      setEditName(result.data.name);
      setEditPrice(result.data.price);
      setEditStock(result.data.stock);
      setEditDescription(result.data.description);
    });
  };

  const styles = {
    product: {
      height: "100px",
      width: "100px",
    },
    button: {
      background: "none",
      border: "none",
    },
  };
  return (
    <div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Product Editor
          </Modal.Title>
        </Modal.Header>
        {update ? (
          <Modal.Body>
            Product updated!
            <div className="text-right">
              <button
                className="btn btn-primary"
                onClick={() => setShow(false)}
              >
                OK
              </button>
            </div>
          </Modal.Body>
        ) : (
          <Modal.Body>
            <form
              className="col-12 p-4"
              id="prod-form"
              onSubmit={handleProductEdit}
            >
              <div className="form-group" id="product-form">
                <label for="exampleFormControlInput1">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  placeholder="Name"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  placeholder="$"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlInput1">Inventory</label>
                <input
                  type="text"
                  className="form-control"
                  id="inventory"
                  placeholder="#"
                  value={editStock}
                  onChange={(e) => setEditStock(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea
                  className="form-control"
                  id="productDescription"
                  placeholder="Product description"
                  rows="3"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                ></textarea>
              </div>

              <label for="exampleFormControlInput1">Product Image</label>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="prod-image-upload"
                    onChange={(e) => setEditImage(e.target.files[0])}
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
                <button type="submit" className="btn btn-dark">
                  Update Product
                </button>
              </div>

              <div className="text-right updateStatus"></div>
            </form>
          </Modal.Body>
        )}
      </Modal>
      <div className="row align-items-center p-3">
        <div className="col-2">
          <button style={styles.button} onClick={deleteProduct}>
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="col-3">
          <img src={image} className="mr-3" alt="..." style={styles.product} />
        </div>
        <div className="col">{name}</div>
        <button className="btn btn-dark" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default ProductEditor;
