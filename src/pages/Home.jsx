import React from "react";
import "./Home.css";

function Home() {
  document.title = "Yogesh Sathe | Home";
  return (
    <>
      <div className="master">
        <div className="container">
          <p>Hello 👋 I am Yogesh</p>

          <section className="animation">
            <div className="first">
              <div>FRONT END DEVELOPER</div>
            </div>
            <div className="second">
              <div>BACK END DEVELOPER</div>
            </div>
            <div className="third">
              <div>FULL STACK DEVELOPER</div>
            </div>
            <br />
          </section>
          <div className="home-connect">
            <div className="email">
              <i className="fa-solid fa-paper-plane"></i>
              <p>ysathe991@gmail.com</p>
            </div>
            <div className="email">
              <i className="fa-solid fa-phone-volume"></i>
              <p>+91 9049101160</p>
            </div>
          </div>
          <div className="social-media">
            <div className="social-media-icons">
              <div className="resume">
                <a to="" title="Download Resume">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                </a>
              </div>
              <div className="linkedin">
                <a href="" title="LinkedIn">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <div className="github">
                <a href="" title="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="twitter">
                <a href="" title="Twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <button className="button-29">Get Resume</button>
        </div>

        <div className="img">
          <img src="images/mernstack.gif" alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
