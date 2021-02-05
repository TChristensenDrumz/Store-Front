import React from "react";

function NameInput({ setFirstName, setLastName }) {
  return (
    <div>
      <div className="form-group">
        <label for="firstName">First Name</label>
        <input type="text" className="form-control" onChange={e => setFirstName(e.target.value)}/>
      </div>
      <div className="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" onChange={e => setLastName(e.target.value)}/>
      </div>
    </div>
  );
}

export default NameInput;
