import React, { Component } from "react";
import "./StaticPages.css";

class Process extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-md-8 zoom">
            <h2 class="news-heading">Process</h2>
            <div class="row process-box">
              <div class="col-md-6">
                <img
                  src={
                    "./avatars/Salvage-Cars-for-Sale-Auto-salvage-guide-AFF-Vehicle-Services-714548.jpg"
                  }
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
              <div class="col-md-6">
                <h3 class="process-heading">How does a Car become Salvage?</h3>
                <p>
                  Salvage title vehicles always come with a lot of questions.
                  Most vehicles won’t ever become a salvage vehicle from the
                  time they come off of the production line until they hit the
                  junkyard decades later....
                </p>
                <a href="#" class="process-btn">
                  Read More
                </a>
              </div>
            </div>
            <div class="row process-box">
              <div class="col-md-6">
                <h3 class="process-heading">Inside the Wreckers World</h3>
                <p>
                  Auto Wrecking has grown to become a huge business all over the
                  world. With the transportation needs of human beings
                  increasing with development of civilization and increasing
                  standards of living, this business is going to stay....
                </p>
                <a href="#" class="process-btn">
                  Read More
                </a>
              </div>
              <div class="col-md-6">
                <img
                  src={"./avatars/11536646-3x2-xlarge.jpg"}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </div>
            <div class="row process-box">
              <div class="col-md-6">
                <img
                  src={"./avatars/Best-Time-to-Sell-Your-Car.jpg"}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
              <div class="col-md-6">
                <h3 class="process-heading">Selling a Car</h3>
                <p>
                  Once a car has survived beyond its life cycle, with each
                  passing day, the parts wear out and the amount of expenditure
                  on its maintenance keeps rising. When the car reaches such a
                  point it is always a better choice to get rid....
                </p>
                <a href="#" class="process-btn">
                  Read More
                </a>
              </div>
            </div>
            <div class="row process-box">
              <div class="col-md-6">
                <h3 class="process-heading">Towing Process</h3>
                <p>
                  If you have never pulled a trailer behind your vehicle, then
                  you will find these information about towing fascinating and
                  would help you plan towing safely. Towing a car using your
                  Car, SUV or 4WD is one aspect and Towing Cars, SUV....
                </p>
                <a href="#" class="process-btn">
                  Read More
                </a>
              </div>
              <div class="col-md-6">
                <img
                  src={"./avatars/Towing-Service.jpg"}
                  style={{ height: "auto", width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <img
              src={"./avatars/Selling-a-Car-Infographics.gif"}
              style={{ height: "auto", width: "100%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
