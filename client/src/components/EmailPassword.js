import React from "react";

function EmailPassword({ setEmail, setPassword }) {
  return (
    <div>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input 
          type="password" 
          class="form-control" 
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
}

export default EmailPassword;
