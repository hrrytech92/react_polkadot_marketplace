import React, { useEffect } from 'react';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import "../assets/scss/about.scss";
import * as Services from '../services';
import CodeConstant from '../config/CodeConstant';

function About() {
  useEffect(() => {
    Services.getAllApisList().then(response => {
      if (response.status === CodeConstant.Success) {
        console.log('--response success--', response.data);
      }
    })
    .catch(err => {
      console.log('--response error--', err.message);
    })
  });

  const text = 'This is About page.';
  
  return (
    <>
      <Header/>
      <div className="about_container">
        <p> {text} </p>
      </div>
      <Footer/>
    </>    
  );
}

export default About;