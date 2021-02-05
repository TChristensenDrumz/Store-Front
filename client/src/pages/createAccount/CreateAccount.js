import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import NameInput from "../../components/NameInput";
import api from "../../utils/api";

function CreateAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [redirect, setRedirect] = useState({url: "/csignup"});

    const handleCreateAccount = (event) => {
        event.preventDefault();
        if (!email || !password || !first_name || !last_name) {
            return alert("Please provide all requested information");
        };
        api.register({email, password, first_name, last_name}).then(result => console.log(result));
        setRedirect({url: "/login"});
    }
  return (
    <form className="container" onSubmit={handleCreateAccount}>
        <h2>Create Account</h2>
      <NameInput setFirstName={setFirstName} setLastName={setLastName}/>
      <EmailPassword setEmail={setEmail} setPassword={setPassword}/>
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
          <a href="/osignup">Store owner? Create account here</a>
        </small>
      </div>
      <Redirect to={redirect.url} />
    </form>
  );
}

export default CreateAccount;
