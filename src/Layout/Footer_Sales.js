import React from "react";
import {Link} from "@material-ui/core";
import "../assets/scss/footer_sales.scss";

export default function Footer() {
  // const text = 'This is footer';
  
  return (
    <footer className="footer_sales">
      <div className="divider"></div>
      <div className="footer_body">
        <div className="menu_wrapper">
          <ul>
            <li><Link to="/">Section Menu /</Link></li>
            <li><Link to="/">Site Explorer</Link></li>
            <li><Link to="/">Section Menu /</Link></li>
            <li><Link to="/">Site Explorer</Link></li>
            <li><Link to="/">Section Menu /</Link></li>
            <li><Link to="/">Site Explorer</Link></li>
          </ul>
          <ul>
            <li><Link to="/">Section Menu /</Link></li>
            <li><Link to="/">Site Explorer</Link></li>
            <li><Link to="/">Section Menu /</Link></li>
            <li><Link to="/">Site Explorer</Link></li>
            <li><Link to="/">Section Menu /</Link></li>
            <li><Link to="/">Site Explorer</Link></li>
          </ul>
        </div>
        <div className="footer_logo_wrapper">
          <div><img src={ require("../assets/img/Logo-1.png") } alt="" /></div>
          <label>Quorum LLC</label>
        </div>
      </div>
    </footer>
  );
}