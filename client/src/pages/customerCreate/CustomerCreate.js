import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import NameInput from "../../components/NameInput";
import api from "../../utils/api";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [redirect, setRedirect] = useState({ url: "/new-customer" });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (!email || !password || !first_name || !last_name) {
      setMessage("Please provide all requested information");
      return handleShow();
    };
    api
      .register({ email, password, first_name, last_name })
      .then((result) => {
        console.log(result);
      });
    // setRedirect({ url: "/customer-login" });
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Store Front</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      <Header />
      <form className="container mb-5" onSubmit={handleCreateAccount}>
        <h2>Create Account</h2>
        <NameInput setFirstName={setFirstName} setLastName={setLastName} />
        <EmailPassword setEmail={setEmail} setPassword={setPassword} />
        <button type="submit" class="btn btn-dark mb-2">
          Submit
        </button>
        <div>
          <small class="form-text">
            <a href="/customer-login">Already have an account? Login here</a>
          </small>
        </div>
        <div>
          <small class="form-text">
            <a href="/signup">Store owner? Create account here</a>
          </small>
        </div>
        <Redirect to={redirect.url} />
      </form>
      <Footer />
    </>
  );
}

export default CreateAccount;
