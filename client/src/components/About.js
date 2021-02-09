import React from "react";

function About({ image, info, color, about_scroll, font }) {
  const styles = {
    jumbo: {
      fontFamily: `${font}`,
      color: `${color}`,
      height: "100vh",
      width: "100vw",
      padding: "0",
      backgroundImage: `url("${image}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: `${about_scroll}`,
      backgroundRepeat: "no-repeat",
      marginBottom: "0"
    },
    text: {
      textAlign: "center",
      paddingTop: "20vh",
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },
  };
  return (
    <div>
      <div style={styles.jumbo}>
        <h1 className="display-2 text-center pt-4">About Us</h1>
        <p style={styles.text}>{info}</p>
      </div>
    </div>
  );
}

export default About;
