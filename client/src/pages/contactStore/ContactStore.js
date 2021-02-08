import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import NameInput from "../../components/NameInput";

function ContactStore() {
  const { currentStore } = useSelector(state => state.stores);
  const [accent_color, setAccentColor] = useState("black");
  const [body_color, setBodyColor] = useState("black");
  const [footer_color, setFooterColor] = useState("white");

  useEffect(() => {
    if(currentStore) {
      setAccentColor(currentStore.accent_color);
      setBodyColor(currentStore.body_color);
      setFooterColor(currentStore.footer_color);
    }
  }, []);
  
  const style = {
    page: {
      color: `${body_color}`,
      textShadow: `-.5px 0 ${accent_color}, 0 .5px ${accent_color}, 1px 0 ${accent_color}, 0 -.5px ${accent_color}`,
      letterSpacing: "2px"
    },
    button: {
      backgroundColor: `${accent_color}`,
      color: `${footer_color}`
    }
  }

  return (
    <>
      <Header />
      <div className="container mb-5" style={style.page}>
        <h1>Contact Us</h1>
        <NameInput />
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
        />
        <div className="form-group">
          <label>Message</label>
          <br />
          <textarea rows="5" className="form-control"></textarea>
        </div>
        <button style={style.button}>Submit</button>
      </div>
      <Footer />
    </>
  );
}

export default ContactStore;
