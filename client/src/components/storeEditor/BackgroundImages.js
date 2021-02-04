import React from "react";

function BackgroundImages() {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="list-background"
        role="tabpanel"
        aria-labelledby="list-settings-list"
      >
        <form className="col-12 p-4" id="bg-image-form">
          <label for="exampleFormControlInput1">Background Image</label>
          <div className="input-group pb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="bg-image"
                aria-describedby="inputGroupFileAddon04"
              />
              <label
                className="custom-file-label"
                for="bg-image"
                id="bg-edit-name"
              >
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary button-color"
                type="button"
                id="bg-image-upload"
              >
                Upload
              </button>
            </div>
          </div>

          <label for="exampleFormControlInput1">Scroll Behavior</label>
          <div className="input-group mb-3">
            <select className="custom-select" id="bg-scroll">
              <option selected>Choose...</option>
              <option value="scroll">Scroll</option>
              <option value="fixed">Fixed</option>
            </select>
            <div className="input-group-append">
              <label className="input-group-text" for="inputGroupSelect02">
                Options
              </label>
            </div>
          </div>

          <label for="exampleFormControlInput1">About Image</label>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="about-image"
                aria-describedby="inputGroupFileAddon04"
              />
              <label
                className="custom-file-label"
                for="about-image"
                id="about-edit-name"
              >
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary button-color"
                type="button"
                id="about-image-upload"
              >
                Upload
              </button>
            </div>
          </div>

          <label for="exampleFormControlInput1">Scroll Behavior</label>
          <div className="input-group mb-3">
            <select className="custom-select" id="about-scroll">
              <option selected>Choose...</option>
              <option value="scroll">Scroll</option>
              <option value="fixed">Fixed</option>
            </select>
            <div className="input-group-append">
              <label className="input-group-text" for="inputGroupSelect02">
                Options
              </label>
            </div>
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="btn button-color"
              id="scroll-submit"
            >
              Update
            </button>
          </div>

          <div className="text-right updateStatus"></div>
        </form>
      </div>
    </div>
  );
}

export default BackgroundImages;
