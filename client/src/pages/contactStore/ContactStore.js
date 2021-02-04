import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NameInput from "../../components/NameInput";

function ContactStore() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <NameInput />
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        className="form-control"
        id="emailInput"
        aria-describedby="emailHelp"
      />
      <div className="form-group">
        <label>Message</label>
        <br />
        <textarea rows="5" className="form-control"></textarea>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default ContactStore;
