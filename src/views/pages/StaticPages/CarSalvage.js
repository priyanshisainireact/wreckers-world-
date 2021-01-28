import React, { Component } from "react";
import "./StaticPages.css";
import Sidebar from "../sidebar/Sidebar";
class CarSalvage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 zoom">
            <h2 class="news-heading">How does a Car become Salvage</h2>
            <div className="staticdetails">
              <div class="row">
                <div class="col-lg-6">
                  <img
                    src={
                      "./avatars/Salvage-Cars-for-Sale-Auto-salvage-guide-AFF-Vehicle-Services-714548.jpg"
                    }
                  />
                </div>
                <div class="col-lg-6">
                  <p>
                    Before you purchase a salvage title vehicle, you need to
                    know what you are getting yourself into. Salvage title
                    vehicles always come with a lot of questions. Most vehicles
                    won’t ever become a salvage vehicle from the time they come
                    off of the production line until they hit the junkyard
                    decades later.
                    <br />
                    How a car goes from “normal” to salvage is definitely a
                    process. If you have recently been involved in a major
                    accident or are considering purchasing a salvage title
                    vehicle, it would behoove you to know how exactly how a car
                    becomes a salvage — and what you’re signing up for if you
                    decide to purchase one.
                  </p>
                </div>
              </div>

              <p>
                Buyer beware! The most common ways a vehicle becomes salvage is
                by being involved in a major accident or a natural disaster. But
                in some states, a vehicle can also become a salvage title if it
                was stolen and never recovered by the police. Both of these
                reasons should raise red flags, and you should proceed with
                caution. In most cases, you are much better off avoiding buying
                a salvage title — they’re just more trouble than they are worth.
              </p>
              <h4 className="StaticHeading">A Major Accident</h4>
              <p>
                If a vehicle is involved in an accident and is declared a total
                loss by the insurance company, but the owner decides to keep it
                anyway, the vehicle will be declared a salvage vehicle. The
                accident doesn’t even have to be all that major if the vehicle
                is older and not holding much value at the time of the accident.
                Sometimes seemingly minor damage can spell the end of a clunker,
                at least as far as insurance companies are concerned. If a car
                is totaled, that can be step one on the road to becoming a
                salvage vehicle. Often these vehicles are sent directly to the
                scrapyard, but occasionally, a salvage title can get added for
                those drivers who do not want to part with their beloved
                vehicle.
                <br />
                Sadly, even a shiny new vehicle can be turned into a salvage
                vehicle after a severe accident. Even if the insurance carrier
                does not want to mess with the repair, someone may be willing to
                take on the job. But once an insurance carrier says it is not
                worth repairing, it will be issued a salvage title, even if the
                repairs are undertaken. If you want to remove the salvage title
                by repairing the vehicle, it will have to undergo a rigorous
                inspection before you’ll ever be allowed to drive it on the
                public roads.
                <br />
                It will then be declared a rebuilt salvage title. Each state has
                its own criteria for what makes a vehicle a total loss, also
                known as a salvage if repairs are made. Most states consider a
                vehicle with repairs costing 75% of its total actual cash value
                a salvage — that is if repairs are made.
                <br />
                It’s also worth keeping in mind that just because a car looks
                like it’s good as new does not mean that everything is
                functioning properly on the inside in a way that makes it
                totally safe to drive. If it has a salvage title, that’s
                probably for a reason.
              </p>
              <h4 className="StaticHeading">Natural Disaster</h4>
              <p>
                Flooding is the biggest culprit for turning a well-functioning
                vehicle into a salvage. Many times the damage is not visible at
                all to a buyer. The water dries up and leaves little evidence
                behind. However, the mechanics of a vehicle can be severely
                altered, leaving the vehicle often times useless. Dealerships in
                flood planes are at risk of losing their entire lot due to
                floods and hurricanes. Of course, many individuals have to deal
                with flooded vehicles, too. Insurance carriers will cover flood
                damage if comprehensive coverage is selected.
              </p>
              <h4 className="StaticHeading">
                Additional Reasons for a Car to be Salvage
              </h4>
              <p>
                It is not only major accidents and natural disasters which can
                cause a vehicle to be savage. Look for these other common
                reasons:
              </p>
              <p></p>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i>{" "}
                <span class="bold">Kit Cars —</span> it’s usually best to leave
                the DIY projects for less complicated tasks.
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i>{" "}
                <span class="bold">Restored Antiques —</span> Repairing old
                vehicles takes special skills. Do you really want to take your
                chances?
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i>{" "}
                <span class="bold">
                  Stolen Car Returned After a Total Loss Payout —{" "}
                </span>{" "}
                it doesn’t mean that the car doesn’t run, but you don’t want to
                get caught up in any legal trouble, do you?
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i>{" "}
                <span class="bold">
                  Major Car Repair Using Aftermarket Parts —{" "}
                </span>{" "}
                it might look fine, but that doesn’t mean all is well.
              </li>
            </div>
          </div>
          <div className="col-lg-4">
            <Sidebar />
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

export default CarSalvage;
