import React, { Component, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const handleClick = () => {
    auth.signOut();
    setIsLogIn(true);
  };

  var user = firebase.auth().currentUser;

  return (
    <section id="header">
      <div className="container">
        <div className="row headerbtn">
          <div className="btn-group">
            <Link to="/listyouryard">
              {" "}
              <button className="subscription"> List Your Yard </button>
            </Link>
            <Link to="/bidform">
              {" "}
              <button className="subscription"> List Your Car </button>
            </Link>
            {console.log(currentUser)}
            {user ? (
              <Link className="option">
                <button className="subscription" onClick={() => auth.signOut()}>
                  Log Out
                </button>
              </Link>
            ) : (
              <Link className="option" to="/login">
                <button className="subscription"> Log In </button>
              </Link>
            )}
          </div>
        </div>
        <div className="row">
          <div className="logo">
            <img
              src={"./avatars/WreckersLogo.png"}
              style={{ height: "auto", width: "50%" }}
            />
            <p className="tagline">Sustainability - Comes First</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
