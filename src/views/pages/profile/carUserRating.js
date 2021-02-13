import React, { Component } from "react";
import { Link } from "react-router-dom";
import RatingForm from "../rating/ratingForm";
import Rating from "../rating/rating";
import "./profile.css";

class CaruserRating extends Component {
  render() {
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
            {/* <div class="row">
              <h2 class="news-heading zoom">Add Review Here</h2>
            </div> */}
            <Rating />
            <RatingForm />
          </div>
        </div>
      </div>
    );
  }
}

export default CaruserRating;
