import React, { Component } from "react";

class SellCar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <img
            src={"./avatars/undraw_success_factors_fay0.png"}
            style={{ height: "260px", width: "100%" }}
          />

          <h2 className="bidtitle">Online Evaluation</h2>
          <p>Enter your car details and get an instant price.</p>
        </div>
        <div className="col-lg-4">
          <img
            src={"./avatars/2021-01-23.png"}
            style={{ height: "260px", width: "100%" }}
          />

          <h2 className="bidtitle">Free Inspection</h2>
          <p>Enter your car details and get an instant price.</p>
        </div>
        <div className="col-lg-4">
          <img
            src={"./avatars/undraw_towing_6yy4.png"}
            style={{ height: "260px", width: "100%" }}
          />

          <h2 className="bidtitle">Sell car in an hour</h2>
          <p>Enter your car details and get an instant price.</p>
        </div>
      </div>
    );
  }
}

export default SellCar;
