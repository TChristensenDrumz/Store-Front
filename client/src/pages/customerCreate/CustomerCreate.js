import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import NameInput from "../../components/NameInput";
import api from "../../utils/api";
import Alert from "../../components/Alert";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CreateAccount() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setShow(false);
    if (redirect) {
      history.push("/customer-login");
    }
  };
  const handleShow = (created = false) => {
    setShow(true);
    if (created) {
      setRedirect(true);
    }
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (!email || !password || !first_name || !last_name) {
      setMessage("Please provide all requested information");
      return handleShow();
    };
    api.checkEmail(email).then((result) => {
      if (result.data) {
        setMessage(
          "An account with this email address already exists. Please proceed to customer login."
        );
        return handleShow();
      } 
      else {
        api
          .register({ email, password, first_name, last_name })
          .then((result) => {
            setMessage("Account created! Please proceed to log in.");
            handleShow(true);
          });
      };
    });
  };
  return (
    <>
      <Alert 
        show = {show}
        handleClose = {handleClose}
        title = {"Store Front"}
        message = {message}
      />
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
      </form>
      <Footer />
    </>
  );
}

export default CreateAccount;
