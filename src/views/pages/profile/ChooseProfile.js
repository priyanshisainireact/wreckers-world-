import React from "react";
import "./profile.css";
import Sidebar from "../sidebar/Sidebar";

const ChooseProfile = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 zoom">
          <div className="row">
            <h2 className="news-heading">Are you car user or yard user ?</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 text-center">
              <div className="chooseUserCard">
                <img
                  src={"./avatars/undraw_success_factors_fay0.png"}
                  style={{ height: "260px", width: "100%" }}
                />
                <button type="button" className="userBtn">
                  Car User
                </button>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="chooseuesr">
                <img
                  src={"./avatars/2021-01-23.png"}
                  style={{ height: "260px", width: "100%" }}
                />
                <button type="button" className="userBtn">
                  Car User
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <Sidebar />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ChooseProfile;
