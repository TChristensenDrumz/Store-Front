import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import Alert from "../../components/Alert";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Token from "../../utils/Token";
import { getOwnerStore } from "../../redux/actions/stores.actions";

function OwnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState({ url: "/login" });
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();

  const handleErrorClose = () => setShowError(false);
  const handleErrorShow = () => setShowError(true);

  const handleSuccessClose = () => setShowSuccess(false);
  const handleSuccessShow = () => setShowSuccess(true);

  useEffect(() => {}, [email, password]);

  const handleLogin = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please provide all login information.");
      return handleErrorShow();
    }
    api.login({ email, password }).then((result) => {
      if (result.data.success) {
        let { isSeller, userId } = JSON.parse(
          atob(result.data.token.split(".")[1])
        );
        if (!isSeller) {
          setErrorMessage(
            "No store owner account found. Please sign in as customer or create store owner account."
          );
          return handleErrorShow();
        }
        localStorage.setItem("token", JSON.stringify(result.data.token));
        api.getStoreByOwner(userId).then(async (storeData) => {
          await dispatch(getOwnerStore(storeData.data));
          setRedirect({ url: "/storeEditor" });
        });
      } else {
        setSuccessMessage(result.data.message)
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
        message={errorMessage}
      />
      <Alert
        show={showSuccess}
        handleClose={handleSuccessClose}
        title={"Store Front"}
        message={successMessage}
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
        <h3>Store Login</h3>
        <EmailPassword setEmail={setEmail} setPassword={setPassword} />
        <button type="submit" class="btn btn-dark mb-2">
          Submit
        </button>
        <div>
          <small class="form-text">
            <a href="/signup">New store owner? Sign up for an account here</a>
          </small>
        </div>
        <div>
          <small class="form-text">
            <a href="/customer-login">Customer? Login here</a>
          </small>
        </div>
        <Redirect to={redirect.url} />
      </form>
      <Footer position="bottom"/>
    </>
  );
}

export default OwnerLogin;
