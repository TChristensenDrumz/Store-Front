import React from "react";

function DeleteStore() {
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
              className="btn btn-danger delete-store"
              data-storeid="{{ storeid }}"
            >
              Delete
            </button>
          </div>
          <div className="text-right updateStatus"></div>
        </form>
      </div>
    </div>
  );
}

export default DeleteStore;
