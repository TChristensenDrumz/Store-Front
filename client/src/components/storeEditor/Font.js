import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOwnerStore } from "../../redux/actions/stores.actions";
import api from "../../utils/api";
import Alert from "../Alert";

function Font() {
  const dispatch = useDispatch();
  const { ownerStore } = useSelector((state) => state.stores);
  const [font, setFont] = useState(ownerStore.font);
  const [font_color, setFontColor] = useState(ownerStore.font_color);
  const [body_color, setBodyColor] = useState(ownerStore.body_color);
  const [footer_color, setFooterColor] = useState(ownerStore.footer_color);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFontSubmit = (event) => {
    event.preventDefault();
    api
      .updateStore(ownerStore.id, {
        font,
        font_color,
        body_color,
        footer_color,
      })
      .then((result) => {
        api.getStoreByOwner(ownerStore.UserId).then((data) => {
          dispatch(getOwnerStore(data.data));
          handleShow();
        });
      });
  };

  const fonts = ['Anton', 'Dancing Script', 'Hachi Maru Pop', 'IBM Plex Sans', 'Indie Flower', 'Julius Sans One', 'Merriweather', 'Montserrat', 'Permanent Marker', 'Roboto', 'UnifrakturCook']

  return (
    <div>
      <Alert 
        show = {show}
        handleClose = {handleClose}
        title = {"Store Editor"}
        message = {"Font updated!"}
      />
      <div
        className="tab-pane fade show active"
        id="list-font"
        role="tabpanel"
        aria-labelledby="list-profile-list"
      >
        <form className="col-12 p-4" id="font-form" onSubmit={handleFontSubmit}>
          <label for="exampleFormControlInput1">Font</label>
          <div className="input-group mb-3">
            <select
              className="custom-select"
              id="font-select"
              onChange={(e) => setFont(e.target.value)}
            >
              <option selected style={{fontFamily:font}} value={font}></option>
              {fonts.map(font => (
                <option style={{fontFamily:font}} value={font} key={font}>{font}</option>
              ))}
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
              value={font_color}
              onChange={(e) => setFontColor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Body Font Color</label>
            <input
              type="color"
              className="form-control color-form"
              id="bodyFontColor"
              value={body_color}
              onChange={(e) => setBodyColor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlInput1">Footer Font Color</label>
            <input
              type="color"
              className="form-control color-form"
              id="footerFontColor"
              value={footer_color}
              onChange={(e) => setFooterColor(e.target.value)}
            />
          </div>

          <div className="text-right">
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

export default Font;
