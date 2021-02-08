import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Jumbo({
  image,
  name,
  tagline,
  font,
  taglineColor,
  buttonColor,
  buttonTextColor,
  bg_scroll,
  body_color,
  storeId,
}) {
  const history = useHistory();

  const browse = () => {
    console.log("Clicked")
    history.push("/storefront/allproducts/" + storeId);
  };

  const styles = {
    jumbo: {
      color: `${body_color}`,
      fontFamily: `${font}`,
      height: "100vh",
      width: "100vw",
      padding: "0",
      backgroundImage: `url(${image})`,
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundAttachment: `${bg_scroll}`,
      backgroundRepeat: "no-repeat"
    },
    storeName: {
      textAlign: "center",
      paddingTop: "15vh",
    },
    button: {
      backgroundColor: `${buttonColor}`,
      color: `${buttonTextColor}`,
      transform: "scale(1.7)",
    },
  };
  return (
    <div>
      <div style={styles.jumbo}>
        <Header />
        <div style={styles.storeName}>
          <h1 className="display-2 mb-2">{name}</h1>
          <h3 className="display-6 mb-5" style={{ color: `${taglineColor}` }}>
            {tagline}
          </h3>
          <Button style={styles.button} onClick={browse}>
            Browse Collection
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Jumbo;
