import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../utils/api";

function DeleteStore() {
  const { ownerStore } = useSelector(state => state.stores);
  const history = useHistory();

  const handleDelete = event => {
    event.preventDefault();
    api.deleteStore(ownerStore.id).then(result => {
      history.push("/");
    })
  }

  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="list-delete"
        role="tabpanel"
        aria-labelledby="list-delete-list"
      >
        <form className="col-12 p-4">
          <div className="form-group">
            <label for="exampleFormControlInput1">
              Are you sure you want to delete your store?
            </label>
          </div>
          <div className="text-left">
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <div className="text-right"></div>
        </form>
      </div>
    </div>
  );
}

export default DeleteStore;
