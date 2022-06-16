import React, { useEffect } from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import "../assets/scss/play.scss";

function Play() {
  useEffect(() => {
  });

  return (
    <>
      <Header/>
      <div className="about_container">
        <div className="about_banner"><h2>Play</h2></div>
        <div className="play_content_wrapper">
          <div className="canvas_container"></div>
          <div className="control_container">
            <div className="control_wrapper">Controls:</div>
            <div className="help_wrapper"><label>Arrow Keys or Mouse</label><label> - Movement</label></div>
            <div className="help_wrapper"><label>Space or Mouse Left Button</label><label> - Interact Confirm</label></div>
            <div className="help_wrapper"><label>X or ESC</label><label> = Cancel, Back, Access menu</label></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>    
  );
}

export default Play;