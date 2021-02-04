import React from "react";

function Font() {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="list-font"
        role="tabpanel"
        aria-labelledby="list-profile-list"
      >
        <form className="col-12 p-4" id="font-form">
          <label for="exampleFormControlInput1">Font</label>
          <div className="input-group mb-3">
            <select className="custom-select" id="font-select">
              <option selected>Choose...</option>
              <option className="helvetica" value="helvetica neue">
                Helvetica Neue
              </option>
              <option className="ibm" value="IBM Plex Sans">
                IBM Plex Sans
              </option>
              <option className="julius" value="Julius Sans One">
                Julius Sans One
              </option>
              <option className="lora" value="Lora">
                Lora
              </option>
              <option className="bungee" value="Bungee">
                Bungee
              </option>
              <option className="creepster" value="Creepster">
                Creepster
              </option>
            </select>

            <div className="input-group-append">
              <label className="input-group-text" for="inputGroupSelect02">
                Options
              </label>
            </div>
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Header Font Color</label>
            <input
              type="color"
              className="form-control color-form"
              id="headerFontColor"
              value="{{ header_font_color }}"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Body Font Color</label>
            <input
              type="color"
              className="form-control color-form"
              id="bodyFontColor"
              value="{{ body_font_color }}"
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Footer Font Color</label>
            <input
              type="color"
              className="form-control color-form"
              id="footerFontColor"
              value="{{ footer_font_color }}"
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

export default Font;
