import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

class YarduserProfile extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <h2 class="news-heading zoom">Yard User Profile !</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 zoom">
            <div className="usercarlist">
              <div className="profilename">
                <img src={"./avatars/download.png"} className="circleimg" />
                <h2 className="username">User Name</h2>
              </div>
              <div className="Personaldetails">
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
                  <span className="boldtext">State :</span> NSW
                </p>
                <p className="details">
                  <span className="boldtext">Country :</span> Australia
                </p>
                <p className="details">
                  <span className="boldtext">Zip :</span> 3453
                </p>
              </div>
              <div className="Personaldetails">
                <p className="details">
                  <span className="boldtext">Bid Placed :</span> 3
                </p>
                <p className="details">
                  <span className="boldtext">Bid Expired :</span> 1
                </p>
                <p className="details">
                  <span className="boldtext">Bid Active :</span> 2
                </p>
                <p className="details">
                  <span className="boldtext">Total Spent:</span> $450
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
            <div className="usercarlist">
              <ul class="nav nav-pills" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="pill" href="#home">
                    {" "}
                    Bid Hall{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="pill" href="#menu1">
                    {" "}
                    Yard Detail
                  </a>
                </li>
              </ul>

              <div class="tab-content">
                <div id="home" class="container tab-pane active">
                  <div className="row">
                    <div className="bid-card-user-detail">
                      <div className="timersection">
                        <div className="timerfirst">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                        <div className="timerfirst">
                          <p>
                            <strong>Current Date & Time :</strong>12/01/2021
                          </p>
                        </div>
                        <div className="timerfirst">
                          <p>
                            <strong>Start Date & Time :</strong>12/01/2021
                          </p>
                        </div>
                        <div className="timerfirst">
                          <p>
                            <strong>End Date & Time :</strong>12/01/2021
                          </p>
                        </div>
                      </div>
                      <div className="rankfirst">
                        <p>
                          <strong>Your Rank:</strong>
                          <span className="border-right">3</span>

                          <strong>Start Price :</strong>
                          <span className="border-right">$34567</span>

                          <strong>Increment :</strong>
                          <span className="border-right">$200</span>

                          <strong>Last Accepted Bid :</strong>
                          <span className="border-right">$4156.00</span>
                        </p>
                      </div>
                      <div className="notice">
                        <p>
                          <strong>Note :</strong>Start price inclusive of
                          transportation,loading,packing & forwarding charges &
                          GST exclusive
                        </p>
                      </div>

                      {/*

                      <img
                        src={"./avatars/price.svg"}
                        className="pricebidimage"
                      />
                       */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="rankCard">
                      <div className="rankSecond">
                        <div className="rankSecondOne">
                          <img
                            src={"./avatars/bidcar.jpg"}
                            style={{ height: "100%", width: "100%" }}
                            className="homebidimage"
                          />
                          {/* <p className="greatdealrank">
                            <i class="fa fa-handshake-o"></i> Great Deal
                          </p> */}
                        </div>
                        <div className="rankSecondTwo">
                          <h2 className="bidtitle">
                            2013 Hyundai Eon MAGNA PLUS
                          </h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry’s standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.{" "}
                          </p>
                          <button type="button" className="managebtn">
                            Manage Detail{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="menu1" class="container tab-pane fade">
                  <div className="detailpictures">
                    <div className="yardlogo">
                      <img src={"./avatars/samirtruck.png"} />
                    </div>

                    <div className="yarddetail">
                      <h2 className="Detail-heading"> Samir Truck Wreckers</h2>
                      <p className="email">
                        <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                        samircarremoval@gmail.com
                      </p>
                      <p className="phone">
                        <i class="fa fa-phone" aria-hidden="true"></i> 0402 639
                        249
                      </p>
                      <p className="address">
                        <i class="fa fa-location-arrow"></i> 1/48, Pendlebury
                        Road, Cardiff, 2285, Newcastle, New South Wales
                      </p>
                    </div>
                  </div>

                  <div className="socialmedia">
                    <a href="#" class="fa fa-facebook">
                      {" "}
                      Facebook
                    </a>
                    <a href="#" class="fa fa-twitter">
                      {" "}
                      Twitter
                    </a>
                    <a href="#" class="fa fa-pinterest">
                      {" "}
                      Pinterest
                    </a>
                    <a href="#" class="fa fa-linkedin">
                      {" "}
                      Linkedin
                    </a>
                  </div>
                  <div className="detailpictures">
                    <div className="pictureone">
                      <img src={"./avatars/yard.jpeg"} />
                    </div>
                    <div className="pictureone">
                      <img src={"./avatars/yard.jpeg"} />
                    </div>
                    <div className="pictureone">
                      <img src={"./avatars/yard.jpeg"} />
                    </div>
                    <div className="pictureone">
                      <img src={"./avatars/yard.jpeg"} />
                    </div>
                  </div>
                  <div className="listingdetails">
                    <ul className="formlist">
                      <li className="listcontent">
                        <span>Country :</span> Australia
                      </li>
                      <li className="listcontent">
                        <span>City Name:</span> 0402 639 249
                      </li>
                      <li className="listcontent">
                        <span>Website link of the business:</span> 0402 639 249
                      </li>
                      <li className="listcontent">
                        <span>Services provided by the business:</span> Wreckers
                      </li>
                      <li className="listcontent">
                        <span>Additional Information:</span> Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </li>
                    </ul>
                  </div>
                  <div className="editprofile">
                    <p className="edit">
                      Edit Yard Detail{" "}
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default YarduserProfile;
