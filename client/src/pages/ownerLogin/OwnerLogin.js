import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import api from "../../utils/api";

function OwnerLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState({url: "/ologin"});

    useEffect(() => {
        console.log({email, password});
    }, [email, password]);


    const handleLogin = (event) => {
        event.preventDefault();
        if (!email || !password) {
            return alert("Please provide all login information.");
        };
        api.login({email, password}).then(result => {
            console.log(result);
            if (result.data.success) {
                if (!result.data.isSeller) {
                    return alert("No store owner account found. Please sign in as customer or create store owner account.");
                };
                localStorage.setItem("token", JSON.stringify(result.data.token));
                setRedirect({url: "/"});
            } else {
                return alert(result.data.message);
            };
        });
    }
  return (
    <form
      style={{
        width: "50%",
        margin: "auto"
      }}
      onSubmit={handleLogin}
    >
      <h3>Store Owner Login</h3>
      <EmailPassword setEmail={setEmail} setPassword={setPassword}/>
      <button type="submit" class="btn btn-dark mb-2">
        Submit
      </button>
      <div>
        <small class="form-text">
          <a href="/osignup">
            New store owner? Sign up for an account here
          </a>
        </small>
      </div>
      <div>
        <small class="form-text">
          <a href="/login">
            Customer? Login here
          </a>
        </small>
      </div>
      <Redirect to={redirect.url} />
    </form>
  );
}

export default OwnerLogin;
