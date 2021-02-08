import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOwnerStore } from "../../redux/actions/stores.actions";
import api from "../../utils/api";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";

function Colors() {
  const dispatch = useDispatch();
  const { ownerStore } = useSelector((state) => state.stores);
  const [accent_color, setAccentColor] = useState(ownerStore.accent_color);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleColorSubmit = (event) => {
    event.preventDefault();
    api
      .updateStore(ownerStore.id, {
        accent_color
      })
      .then((result) => {
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
        <Modal.Body>Colors updated!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        className="tab-pane fade show active"
        id="list-colors"
        role="tabpanel" 
        aria-labelledby="list-messages-list"
      >
        <form className="col-12 p-4" id="color-form" onSubmit={handleColorSubmit}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Store Color</label>
            <input
              type="color"
              className="form-control color-form"
              id="storeColor"
              value={accent_color}
              onChange={(e) => setAccentColor(e.target.value)}
            />
          </div>

          <div className=" text-right">
            <button type="submit" className="btn btn-dark">
              Update
            </button>
          </div>

          <div className="text-right updateStatus"></div>
        </form>
      </div>
    </div>
  );
}

export default Colors;
