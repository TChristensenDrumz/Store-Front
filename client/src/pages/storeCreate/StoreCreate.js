import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import EmailPassword from "../../components/EmailPassword";
import NameInput from "../../components/NameInput";
import api from "../../utils/api";
import { useDispatch } from "react-redux";
import { getOwnerStore, getStoreInfo } from "../../redux/actions/stores.actions";
import Alert from "../../components/Alert";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function CreateOwnerAccount() {
  const [store_name, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    if (redirect) {
      history.push("/storeEditor");
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
    if (!store_name || !email || !password || !first_name || !last_name) {
      setMessage("Please provide all requested information");
      return handleShow();
    }
    api.checkEmail(email).then((res) => {
      console.log(res.data);
      if (res.data) {
        if (res.data.isSeller) {
          setMessage(
            "This email address is associated with an existing store. Please proceed to login."
          );
          return handleShow();
        }
        api.login({ email, password }).then((userData) => {
          if (!userData.data.success) {
            setMessage(
              "This email is associated with a customer account. Please use the correct customer password to create your store."
            );
            return handleShow();
          }
        });
      }
      api.login({ email, password }).then((result) => {
        console.log(result);
        if (result.data.success) {
          localStorage.setItem("token", JSON.stringify(result.data.token));
          let { userId } = JSON.parse(atob(result.data.token.split(".")[1]));
          api.updateUser(userId, { isSeller: true }).then((res) => {
            api.createStore({ store_name, userId }).then((data) => {
              dispatch(getOwnerStore(data.data));
              setMessage("Store created! Please proceed to the store editor.");
              handleShow(true);
            });
          });
        } else {
          api
            .register({
              email,
              password,
              first_name,
              last_name,
              isSeller: true,
            })
            .then((result) => {
              api.login({ email, password }).then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                let { userId } = JSON.parse(atob(res.data.token.split(".")[1]));
                api.createStore({ store_name, userId }).then((data) => {
                  dispatch(getStoreInfo(data.data));
                  setMessage(
                    "Store created! Please proceed to the store editor."
                  );
                  handleShow(true);
                });
              });
            });
        }
      });
    });
  };
  return (
    <>
      <Alert
        show={show}
        handleClose={handleClose}
        title={"Store Front"}
        message={message}
      />
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
      </form>
      <Footer position="bottom"/>
    </>
  );
}

export default CreateOwnerAccount;
