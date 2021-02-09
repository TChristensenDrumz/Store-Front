import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { getAllStores } from "../../redux/actions/stores.actions";
import Alert from "../../components/Alert";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState({ url: "/customer-login" });
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleErrorClose = () => setShowError(false);
  const handleErrorShow = () => setShowError(true);

  const handleSuccessClose = () => setShowSuccess(false);
  const handleSuccessShow = () => setShowSuccess(true);

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      return handleErrorShow();
    }
    api.login({ email, password }).then((result) => {
      if (result.data.success) {
        localStorage.setItem("token", JSON.stringify(result.data.token));
        api.landingStores().then((res) => {
          dispatch(getAllStores(res.data));
        });
        setRedirect({ url: "/marketplace" });
      } else {
        setMessage(result.data.message)
        return handleSuccessShow();
      }
    });
  };
  return (
    <>
      <Alert
        show={showError}
        handleClose={handleErrorClose}
        title={"Store Front"}
        message={"Please provide all login information."}
      />
      <Alert
        show={showSuccess}
        handleClose={handleSuccessClose}
        title={"Store Front"}
        message={message}
      />
      <Header />
      <form
        className="mb-5"
        style={{
          width: "50%",
          margin: "auto",
        }}
        onSubmit={handleLogin}
      >
        <h3>Customer Login</h3>
        <EmailPassword setEmail={setEmail} setPassword={setPassword} />
        <button type="submit" class="btn btn-dark mb-2">
          Submit
        </button>
        <div>
          <small class="form-text">
            <a href="/new-customer">
              New customer? Sign up for an account here
            </a>
          </small>
        </div>
        <div>
          <small class="form-text">
            <a href="/login">Store owner? Login here</a>
          </small>
        </div>
        <Redirect to={redirect.url} />
      </form>
      <Footer position="bottom"/>
    </>
  );
}

export default LoginPage;
