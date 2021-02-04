import React from "react";

function NameInput() {
  return (
    <div>
      <div className="form-group">
        <label for="firstName">First Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" />
      </div>
    </div>
  );
}

export default NameInput;
