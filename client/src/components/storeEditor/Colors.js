import React from "react";

function Colors() {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="list-colors"
        role="tabpanel"
        aria-labelledby="list-messages-list"
      >
        <form className="col-12 p-4" id="color-form">
          <div className="form-group">
            <label for="exampleFormControlInput1">Store Color</label>
            <input
              type="color"
              className="form-control color-form"
              id="storeColor"
              value="{{ accent_color }}"
            />
          </div>

          <div className=" text-right">
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

export default Colors;
