import React, { Component } from "react";
import "./StaticPages.css";
import Sidebar from "../sidebar/Sidebar";
class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 zoom">
            <h2 class="news-heading">About Us</h2>
            <div className="staticdetails">
              <p>
                Wreckers World is a platform and “Go To Place” for Car, SUV,
                Four Wheel Drive (4WD), Mini Trucks, Truck enthusiasts, the
                Wreckers businesses, Recyclers and businesses which help reuse
                and recycle the wealth in Used Vehicles. It helps in providing a
                logical processing of the used and old vehicles which have
                served its owners and now needs to be handled in a way so that
                it keeps our environment clean and also the remaining value in
                it is utilized well. Wrecking is a large industry all over the
                world. Car and 4WD industry is about 90+ years old with a market
                size of upwards of US $378 B in 2019 with a CAGR of 4.0%. This
                industry directly employs millions of people across the world.
                More than 25 million tons of materials are recycled each year
                from the Automobiles which are scrapped. Imagine the cost and
                energy spent to produce the same quantity of Metals and
                Materials which are used to build Vehicles. All such costs and
                consequent damage to environment is saved due to the work being
                done by the ecosystem of Wreckers. There is a dire need to bring
                the key players in this ecosystem together, country wise as well
                as globally. CloudMynds decided to sponsor Wreckers World to
                develop this ecosystem further which shall help the environment
                and also be a driver for businesses connected with Automobile
                Wrecking. A vehicle enthusiast would get news on Vehicles, New
                Launches, Events and Blogs, a Wrecker can list their business,
                provide visibility to their business, Car owners can list their
                Cars for Sell, people looking for Parts can find it on our site.
                Recyclers can connect with Wreckers world wide. Enjoy your time
                with Wreckers World.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar />

            <img
              src={"./avatars/Banner.png"}
              style={{ height: "auto", width: "60%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
