import React, { useState, useEffect } from "react";
import api from "./utils/api";

function App() {
  const [image, setImage] = useState(null);
  const uploadImage = (event) => {
    event.preventDefault();
    console.log(image);
    let fd = new FormData();
    fd.append("file", image);
    api.uploadImage("bg-image", 32, fd).then(res => console.log(res));
  }
  return (
    <div> 
      <form>
        <input 
          type="file"
          onChange={(e) => setImage(e.target.files[0])} 
        />
        <button onClick={(e) => uploadImage(e)}>Upload</button>
        
      </form>
    </div>
  );
}

export default App;
