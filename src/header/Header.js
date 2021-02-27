import React, { Component, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import firebase, { auth } from "../firebase/firebase.utils";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";

const Header = ({ currentUser }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const handleClick = () => {
    auth.signOut();
    setIsLogIn(true);
  };

  var user = firebase.auth().currentUser;
  console.log(user);

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

            {user ? (
              // <Link className="option">
              //   <button className="subscription" onClick={() => auth.signOut()}>
              //     Log Out
              //   </button>
              // </Link>
              <div>
                <CDropdown className="mt-2">
                  <CDropdownToggle caret color="info">
                    Dropdown button
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Header</CDropdownItem>
                    <CDropdownItem disabled>Action Disabled</CDropdownItem>
                    <CDropdownItem>Action</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Another Action</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
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
