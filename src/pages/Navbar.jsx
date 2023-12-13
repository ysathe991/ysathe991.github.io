import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <div className="nav-wrapper">
          <div className="logo-container">
            {/* <i class="fa-brands fa-yoast"></i> */}
            <img src="/images/favicon.png" alt="" />
            <span>YOGESH</span>
          </div>
          <nav> 
            <input className="hidden" type="checkbox" id="menuToggle" />
            <label className="menu-btn" for="menuToggle">
              <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>
            </label>
            <div className="nav-container">
              <ul className="nav-tabs">
                <li className="nav-tab">Home</li>
                <li className="nav-tab">About</li>
                <li className="nav-tab">Skills</li>
                <li className="nav-tab">Projects</li>
                <li className="nav-tab">Contact</li>
                <li className="nav-tab">Resume</li>
                <li className="nav-tab">
                  <img
                    src="images/profile-pic.png"
                    className="profile-pic"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
