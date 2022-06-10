import React from 'react';
import "../assets/scss/nofound.scss";

function NotFound() {
  
  return (
    <div className="nofound_container">
      <div><img src={ require("../assets/img/404.jpg") } alt="" /></div>
    </div>
  );
}

export default NotFound;