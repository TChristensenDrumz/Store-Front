import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import NameInput from "../../components/NameInput";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { getStoreInfo } from "../../redux/actions/stores.actions";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CreateOwnerAccount() {
  const [store_name, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [redirect, setRedirect] = useState({ url: "/signup" });
  const dispatch = useDispatch();

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (!store_name || !email || !password || !first_name || !last_name) {
      return alert("Please provide all requested information");
    }
    api.login({ email, password }).then((result) => {
      if (result.data.success) {
        localStorage.setItem("token", JSON.stringify(result.data.token));
        let { userId } = JSON.parse(atob(result.data.token.split(".")[1]));
        api.updateUser(userId, { isSeller: true }).then((res) => {
          api.createStore({ store_name, userId }).then((data) => {
            dispatch(getStoreInfo(data.data));
            setRedirect({ url: "/storeEditor" });
          });
        });
      } else {
        api
          .register({ email, password, first_name, last_name, isSeller: true })
          .then((result) => {
            api.login({ email, password }).then((res) => {
              localStorage.setItem("token", JSON.stringify(res.data.token));
              let { userId } = JSON.parse(atob(res.data.token.split(".")[1]));
              api.createStore({ store_name, userId }).then((data) => {
                dispatch(getStoreInfo(data.data));
                setRedirect({ url: "/storeEditor" });
              });
            });
          });
      }
    });
  };
  return (
    <>
      <Header />
      <form className="container mb-5" onSubmit={handleCreateAccount}>
        <h2>Create Store Owner Account</h2>
        <div className="form-group">
          <label for="store-name">Store Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>
        <NameInput setFirstName={setFirstName} setLastName={setLastName} />
        <EmailPassword setEmail={setEmail} setPassword={setPassword} />
        <button type="submit" class="btn btn-dark mb-2">
          Submit
        </button>
        <div>
          <small class="form-text">
            <a href="/login">Already have an account? Login here</a>
          </small>
        </div>
        <div>
          <small class="form-text">
            <a href="/new-customer">Customer? Create account here</a>
          </small>
        </div>
        <Redirect to={redirect.url} />
      </form>
      <Footer />
    </>
  );
}

export default CreateOwnerAccount;
