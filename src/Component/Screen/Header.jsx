import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <body>
        <div className="header">
          <div className="navbar">
            <div className="header-title">
              <img className="logo" src="./imgage/logo.png" alt="" />
              <p className="header-title-name">
                New Height Credit & THrift Society
              </p>

              <div className="nav">
                <ul className="nav-ul">
                  <li>
                    {" "}
                    <a href="/">Home</a>
                  </li>
                  <li className="dashboard-li">
                    <a href="/dashboard">Dashboard</a>{" "}
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/signin">Logout</a>
                  </li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default Header;
