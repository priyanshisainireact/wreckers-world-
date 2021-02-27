import React, { useEffect, useState } from "react";
import "./yardlist.css";
import Sidebar from "../sidebar/Sidebar";
import { yardDetail } from "./yardDetail";
import Rating from "../rating/rating";
import RatingForm from "../rating/ratingForm";
import { firestore } from "../../../firebase/firebase.utils";

const DetailsPage = () => {
  const [yardList, setYardList] = useState([]);
  const [error, setError] = useState("");
  const fetchYards = () => {
    firestore
      .collection("yardList")
      .get()
      .then((response) => {
        const fetchedYard = [];
        response.docs.forEach((document) => {
          const fetched = {
            ...document.data(),
          };
          fetchedYard.push(fetched);
        });
        setYardList(fetchedYard);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    // get the whole collection
    fetchYards();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 zoom">
          {yardList.map((yard) => {
            return (
              <>
                <div className="detailpictures">
                  <div className="yardlogo">
                    <img src={yard.logoImage} />
                  </div>
                  <div className="yarddetail">
                    <h2 className="Detail-heading">{yard.yardName} </h2>
                    <p className="email">
                      <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                      {yard.emailAddress}
                    </p>
                    <p className="phone">
                      <i class="fa fa-phone" aria-hidden="true"></i>{" "}
                      {yard.contactNumber}
                    </p>
                    <p className="address">
                      <i class="fa fa-location-arrow"></i> {yard.address}
                    </p>
                  </div>
                </div>
                <div className="socialmedia">
                  <a href={yard.FacebookLink} class="fa fa-facebook">
                    {" "}
                    Facebook
                  </a>
                  <a href={yard.TwitterLink} class="fa fa-twitter">
                    {" "}
                    Twitter
                  </a>
                  <a href={yard.PinterestLink} class="fa fa-pinterest">
                    {" "}
                    Pinterest
                  </a>
                  <a href={yard.LinkeinLink} class="fa fa-linkedin">
                    {" "}
                    Linkedin
                  </a>
                </div>
                <div className="detailpictures">
                  <div className="pictureone">
                    <img src={yard.Image1} />
                  </div>
                  <div className="pictureone">
                    <img src={yard.Image2} />
                  </div>
                  <div className="pictureone">
                    <img src={yard.Image3} />
                  </div>
                  <div className="pictureone">
                    <img src={yard.Image4} />
                  </div>
                </div>
                <div className="listingdetails">
                  <ul className="formlist">
                    {/* 
                      <li className="listcontent">
                        <span>Contact Number:</span> 0402 639 249
                      </li>
                      <li className="listcontent">
                        <span>Email Address:</span> samircarremoval@gmail.com
                      </li>
                      */}
                    <li className="listcontent">
                      <span>Country :</span> {yard.Country}
                    </li>
                    <li className="listcontent">
                      <span>City Name:</span> {yard.City}
                    </li>
                    <li className="listcontent">
                      <span>Website link of the business:</span>{" "}
                      {yard.WebsiteUrl}
                    </li>
                    <li className="listcontent">
                      <span>Services provided by the business:</span>{" "}
                      {yard.Services.service1}, {yard.Services.service2}
                    </li>
                    <li className="listcontent">
                      <span>Additional Information:</span>{" "}
                      {yard.AdditionalInformation}
                    </li>
                  </ul>
                </div>
                <div className="rating">
                  <Rating />
                  <RatingForm />
                </div>
                <div className="relateditem">
                  <h5>Related Articles</h5>
                  <div className="detailpictures">
                    <div className="pictureone">
                      <img
                        src={"./avatars/fiveb.png"}
                        className="relatedimage"
                      />
                      <h3 className="relateditemheading">5B Car Removal</h3>
                    </div>
                    <div className="pictureone">
                      <img
                        src={"./avatars/Viper.png"}
                        className="relatedimage"
                      />
                      <h3 className="relateditemheading">Viper Cash For Car</h3>
                    </div>
                    <div className="pictureone">
                      <img
                        src={"./avatars/grande.png"}
                        className="relatedimage"
                      />
                      <h3 className="relateditemheading">Grande Wreckers</h3>
                    </div>
                    <div className="pictureone">
                      <img
                        src={"./avatars/samirtruck.png"}
                        className="relatedimage"
                      />
                      <h3 className="relateditemheading">
                        Samir Truck Wreckers
                      </h3>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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
};

export default DetailsPage;
