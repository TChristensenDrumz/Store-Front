import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Jumbo({image, name, tagline, font, taglineColor, buttonColor, buttonTextColor, bg_scroll, body_color}) {
  const styles = {
    jumbo: {
      color: {body_color},
      fontFamily: {font},
      height: "100vh",
      width: "100vw",
      padding: "0",
      backgroundImage: `url(${image})`,
      backgroundSize: "100%",
      backgroundPosition: "center",
      backgroundAttachment: {bg_scroll}
    },
    storeName: {
      textAlign: "center",
      paddingTop: "40vh",
    },
    button: {
        backgroundColor: {buttonColor},
        color: {buttonTextColor},
        transform: "scale(1.7)"
    }
  };
  return (
    <div>
      <Jumbotron fluid style={styles.jumbo}>
        <div style={styles.storeName}>
          <h1 className="display-2 mb-2">{name}</h1>
          <h3 className="display-6 mb-5" style={{color: {taglineColor}}}>{tagline}</h3>
          <Button style={styles.button}>Browse Collection</Button>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
