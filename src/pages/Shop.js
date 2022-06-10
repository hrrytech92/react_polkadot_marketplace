import React from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

import "../assets/scss/shop.scss";

function Shop() {
  const text = 'This is Shop page.';
  
  return (
    <>
      <Header/>
      <div className="shop_container">
        <p> {text} </p>
      </div>
      <Footer/>
    </>
  );
}

export default Shop;