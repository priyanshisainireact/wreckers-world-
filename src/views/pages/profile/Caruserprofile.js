import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

const CaruserProfile = () => {
  return (
    <div className="container">
      <div class="row">
        <h2 class="news-heading zoom">Car User Profile</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 zoom">
          <div className="usercarlistsidebar">
            <div className="profilename">
              <img src={"./avatars/download.png"} className="circleimg" />
              <h2 className="username">User Name</h2>
            </div>
            <div className="Personaldetails">
              <h4 className="profhead">Personal Information</h4>
              <p className="details">
                <span className="boldtext">Email :</span> admin@gmail.com
              </p>
              <p className="details">
                <span className="boldtext">Phone Number :</span> 15457864
              </p>
              <p className="details">
                <span className="boldtext">City :</span> Sydney
              </p>
              <p className="details">
                <span className="boldtext">state :</span> NSW
              </p>
              <p className="details">
                <span className="boldtext">Country :</span> Australia
              </p>
              <p className="details">
                <span className="boldtext">Zip :</span> 3453
              </p>
            </div>
            <div className="Personaldetails">
              <h4 className="profhead">Bidding Information</h4>
              <p className="details">
                <span className="boldtext">Car Listed :</span> 3
              </p>
              <p className="details">
                <span className="boldtext">Car Sold :</span> 1
              </p>
              <p className="details">
                <span className="boldtext">Car Active :</span> 2
              </p>
              <p className="details">
                <span className="boldtext">Total Earned:</span> $450
              </p>
            </div>
            <div className="editprofile">
              <p className="edit">
                Edit Profile{" "}
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 zoom">
          <button type="button" className="addcarbtn">
            Add Car
          </button>
          <div className="row">
            <div className="col-lg-6">
              <div className="caruserbidrow">
                <div class="caruserbidcol-1">
                  <img
                    src={"./avatars/bidcar.jpg"}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>

                <div class="caruserbidcol-2">
                  <div className="biddetailscol">
                    <h2 className="bidtitlecol">Lorem Ipsum</h2>
                    <p>
                      <span>Current Price :</span> 200
                    </p>
                    <p>
                      <span>Bids Placed :</span> No bids placed
                    </p>
                    <p>
                      <span>Ending :</span> 1 day
                    </p>
                    <Link to="./bidform">
                      <button type="button" className="managebtn">
                        Manage Detail
                      </button>
                    </Link>
                  </div>
                </div>

                <img src={"./avatars/price.svg"} className="pricetag" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="caruserbidrow">
                <div class="caruserbidcol-1">
                  <img
                    src={"./avatars/bidcar.jpg"}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div class="caruserbidcol-2">
                  <div className="biddetailscol">
                    <h2 className="bidtitlecol">Lorem Ipsum</h2>
                    <p>
                      <span>Current Price :</span> 200
                    </p>
                    <p>
                      <span>Bids Placed :</span> No bids placed
                    </p>
                    <p>
                      <span>Ending :</span> 1 day
                    </p>
                    <Link to="./bidform">
                      <button type="button" className="managebtn">
                        Manage Detail
                      </button>
                    </Link>
                  </div>
                </div>
                <img src={"./avatars/price.svg"} className="pricetag" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="caruserbidrow">
                <div class="caruserbidcol-1">
                  <img
                    src={"./avatars/bidcar.jpg"}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>

                <div class="caruserbidcol-2">
                  <div className="biddetailscol">
                    <h2 className="bidtitlecol">Lorem Ipsum</h2>
                    <p>
                      <span>Current Price :</span> 200
                    </p>
                    <p>
                      <span>Bids Placed :</span> No bids placed
                    </p>
                    <p>
                      <span>Ending :</span> 1 day
                    </p>
                    <Link to="./bidform">
                      <button type="button" className="managebtn">
                        Manage Detail
                      </button>
                    </Link>
                  </div>
                </div>

                <img src={"./avatars/price.svg"} className="pricetag" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="caruserbidrow">
                <div class="caruserbidcol-1">
                  <img
                    src={"./avatars/bidcar.jpg"}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div class="caruserbidcol-2">
                  <div className="biddetailscol">
                    <h2 className="bidtitlecol">Lorem Ipsum</h2>
                    <p>
                      <span>Current Price :</span> 200
                    </p>
                    <p>
                      <span>Bids Placed :</span> No bids placed
                    </p>
                    <p>
                      <span>Ending :</span> 1 day
                    </p>
                    <Link to="./bidform">
                      <button type="button" className="managebtn">
                        Manage Detail
                      </button>
                    </Link>
                  </div>
                </div>
                <img src={"./avatars/price.svg"} className="pricetag" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="caruserbidrow">
                <div class="caruserbidcol-1">
                  <img
                    src={"./avatars/bidcar.jpg"}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>

                <div class="caruserbidcol-2">
                  <div className="biddetailscol">
                    <h2 className="bidtitlecol">Lorem Ipsum</h2>
                    <p>
                      <span>Current Price :</span> 200
                    </p>
                    <p>
                      <span>Bids Placed :</span> No bids placed
                    </p>
                    <p>
                      <span>Ending :</span> 1 day
                    </p>
                    <Link to="./bidform">
                      <button type="button" className="managebtn">
                        Manage Detail
                      </button>
                    </Link>
                  </div>
                </div>

                <img src={"./avatars/price.svg"} className="pricetag" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="caruserbidrow">
                <div class="caruserbidcol-1">
                  <img
                    src={"./avatars/bidcar.jpg"}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div class="caruserbidcol-2">
                  <div className="biddetailscol">
                    <h2 className="bidtitlecol">Lorem Ipsum</h2>
                    <p>
                      <span>Current Price :</span> 200
                    </p>
                    <p>
                      <span>Bids Placed :</span> No bids placed
                    </p>
                    <p>
                      <span>Ending :</span> 1 day
                    </p>
                    <Link to="./bidform">
                      <button type="button" className="managebtn">
                        Manage Detail
                      </button>
                    </Link>
                  </div>
                </div>
                <img src={"./avatars/price.svg"} className="pricetag" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaruserProfile;
