import React, { Component } from "react";

class ChooseYard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <img
            src={"./avatars/2021-01-27.png"}
            style={{ height: "75%", width: "100%" }}
          />

          <h2 className="bidtitle">Low Cost Acquisition </h2>
        </div>
        <div className="col-lg-3">
          <img
            src={"./avatars/platform.png"}
            style={{ height: "75%", width: "100%" }}
          />

          <h2 className="bidtitle">Brand Value</h2>
        </div>
        <div className="col-lg-3">
          <img
            src={"./avatars/brandvalue.png "}
            style={{ height: "75%", width: "100%" }}
          />

          <h2 className="bidtitle">Single Platform</h2>
        </div>
        <div className="col-lg-3">
          <img
            src={"./avatars/quick.png"}
            style={{ height: "75%", width: "100%" }}
          />

          <h2 className="bidtitle">Quick & Easy</h2>
        </div>
      </div>
    );
  }
}

export default ChooseYard;
