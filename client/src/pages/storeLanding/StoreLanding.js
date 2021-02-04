import React from "react";
import Jumbo from "../../components/Jumbotron";
import About from "../../components/About";
import Preview from "../../components/Preview";

function StoreLanding() {
    const styles= {
        popular: {
            paddingTop: "10vh",
            paddingBottom: "10vh"
        }
    }
  return (
    <div>
      <Jumbo />
      <div style={styles.popular}>
        <h1 className="text-center">Popular Items</h1>
        <div className="row d-flex justify-content-center">
          <Preview />
          <Preview />
          <Preview />
        </div>
      </div>
      <About />
    </div>
  );
}

export default StoreLanding;
