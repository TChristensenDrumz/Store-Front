import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function Jumbo() {
  const styles = {
    jumbo: {
      height: "100vh",
      width: "100vw",
      padding: "0",
      backgroundImage: "url('https://placehold.it/600x600')",
      backgroundSize: "100%",
      backgroundPosition: "center",
    },
    storeName: {
      textAlign: "center",
      paddingTop: "40vh",
    },
    button: {
        transform: "scale(1.7)"
    }
  };
  return (
    <div>
      <Jumbotron fluid style={styles.jumbo}>
        <div style={styles.storeName}>
          <h1 className="display-2 mb-4">Store Name</h1>
          <Button style={styles.button}>Browse Collection</Button>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;
