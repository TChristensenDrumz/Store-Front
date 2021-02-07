import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { getAllStores } from "../../redux/actions/stores.actions";

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState({url: "/customer-login"});
  const dispatch = useDispatch();

    const handleLogin = (event) => {
        event.preventDefault();
        if (!email || !password) {
            return alert("Please provide all login information.");
        };
        api.login({email, password}).then(result => {
            if (result.data.success) {
                localStorage.setItem("token", JSON.stringify(result.data.token));
                api.landingStores().then(res => {
                  dispatch(getAllStores(res.data));
                });
                setRedirect({url: "/marketplace"});
            } else {
                return alert(result.data.message);
            };
        });
    }
  return (
    <>
      <Header />
        <form
          className="mb-5"
          style={{
            width: "50%",
            margin: "auto"
          }}
          onSubmit={handleLogin}
        >
          <h3>Customer Login</h3>
          <EmailPassword setEmail={setEmail} setPassword={setPassword}/>
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
              <a href="/login">
                Store owner? Login here
              </a>
            </small>
          </div>
          <Redirect to={redirect.url} />
        </form>
      <Footer />
    </>
  );
}

export default LoginPage;
