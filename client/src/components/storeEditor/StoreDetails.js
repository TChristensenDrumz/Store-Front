import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOwnerStore } from "../../redux/actions/stores.actions";
import api from "../../utils/api";
import HandleStoreUpdate from "../../utils/HandleStoreUpdate";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

function StoreDetails() {
  const dispatch = useDispatch();
  const { ownerStore } = useSelector((state) => state.stores);
  const [store_name, setStoreName] = useState(ownerStore.store_name);
  const [tagline, setTagline] = useState(ownerStore.tagline);
  const [about, setAbout] = useState(ownerStore.about);
  const [address, setAddress] = useState(ownerStore.address);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDetailSubmit = (event) => {
    event.preventDefault();
    api
      .updateStore(ownerStore.id, { store_name, tagline, about, address })
      .then((result) => {
        console.log(result);
        api.getStoreByOwner(ownerStore.UserId).then((data) => {
          dispatch(getOwnerStore(data.data));
          handleShow();
        });
      });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Store Editor</Modal.Title>
        </Modal.Header>
        <Modal.Body>Store Details updated!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="tab-pane fade show active"
        id="list-store"
        role="tabpanel"
        aria-labelledby="list-home-list"
      >
        <form className="col-12 p-4" onSubmit={handleDetailSubmit}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Store Name</label>
            <input
              type="storeName"
              className="form-control"
              id="storeName"
              placeholder="Store Name"
              value={store_name}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Store Tagline</label>
            <input
              type="storeDetails"
              className="form-control"
              id="storeTagline"
              placeholder="Store Tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">About</label>
            <textarea
              className="form-control"
              placeholder="About Us"
              rows="3"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Store Address</label>
            <input
              type="storeAddress"
              className="form-control"
              id="storeAddress"
              placeholder="Store Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="text-right">
            <button type="submit" className="btn btn-dark ">
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
