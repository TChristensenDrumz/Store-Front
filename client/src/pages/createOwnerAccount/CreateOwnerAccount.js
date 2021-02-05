import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import NameInput from "../../components/NameInput";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { getStoreInfo } from "../../redux/actions/stores.actions";

function CreateOwnerAccount() {
  const [store_name, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [redirect, setRedirect] = useState({ url: "/osignup" });
  const dispatch = useDispatch();

  const handleCreateAccount = (event) => {
    event.preventDefault();
    if (!store_name || !email || !password || !first_name || !last_name) {
      return alert("Please provide all requested information");
    }
    api.login({ email, password }).then((result) => {
      console.log(result);
      if (result.data.success) {
        let { userId } = JSON.parse(atob(result.data.token.split(".")[1]));
        console.log(userId);
        api.updateUser(userId, { isSeller: true }).then((res) => {
          console.log(res);
          api.createStore({ store_name, userId }).then((data) => {
            console.log(data);
            dispatch(getStoreInfo(data.data))
            setRedirect({ url: "/storeEditor" });
          });
        });
      } else {
        api
          .register({ email, password, first_name, last_name, isSeller: true })
          .then((result) => {
            api.login({ email, password }).then((res) => {
              let { userId } = JSON.parse(atob(res.data.token.split(".")[1]));
              api.createStore({ store_name, userId }).then((data) => {
                console.log(data);
                dispatch(getStoreInfo(data.data))
                setRedirect({ url: "/storeEditor" });
              });
            });
          });
      }
    });
  };
  return (
    <form className="container" onSubmit={handleCreateAccount}>
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
          <a href="/osignup">Store owner? Create account here</a>
        </small>
      </div>
      <Redirect to={redirect.url} />
    </form>
  );
}

export default CreateOwnerAccount;
