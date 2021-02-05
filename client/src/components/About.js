import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";

function About({image, info}) {
    const styles = {
        jumbo: {
          height: "100vh",
          width: "100vw",
          padding: "0",
          backgroundImage: `url("${image}")`,
          backgroundSize: "100%",
          backgroundPosition: "center",
        },
        text: {
            textAlign: "center",
            paddingTop: "20vh",
            paddingLeft: "5vw",
            paddingRight: "5vw"
        }
    }
    return (
        <div>
            <Jumbotron style={styles.jumbo}>
                <h1 className="display-2 text-center pt-4">About Us</h1>
                <p style={styles.text}>{info}</p>
            </Jumbotron>
        </div>
    )
}

export default About;
