import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";

function About() {
    const styles = {
        jumbo: {
          height: "100vh",
          width: "100vw",
          padding: "0",
          backgroundImage: "url('https://placehold.it/600x600')",
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
                <p style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatem velit possimus quidem vitae, optio accusantium dolores blanditiis delectus, officiis atque perferendis consequatur culpa vel itaque ipsam non omnis deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatem velit possimus quidem vitae, optio accusantium dolores blanditiis delectus, officiis atque perferendis consequatur culpa vel itaque ipsam non omnis deleniti.</p>
            </Jumbotron>
        </div>
    )
}

export default About;
