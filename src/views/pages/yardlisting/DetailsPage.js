import React, { useEffect, useState } from "react";
import "./yardlist.css";
import Sidebar from "../sidebar/Sidebar";
import { yardDetail } from "./yardDetail";
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
                    <img src={yard.yardFirstImage} />
                  </div>
                  <div className="pictureone">
                    <img src={yard.yardSecondImage} />
                  </div>
                  <div className="pictureone">
                    <img src={yard.yardThirdImage} />
                  </div>
                </div>
                <div className="listingdetails">
                  <ul className="formlist">
                    <li className="listcontent">
                      <span>Country :</span> {yard.country}
                    </li>
                    <li className="listcontent">
                      <span>City Name:</span> {yard.city}
                    </li>
                    <li className="listcontent">
                      <span>Website link of the business:</span>{" "}
                      {yard.websiteLink}
                    </li>
                    <li className="listcontent">
                      <span>Services provided by the business:</span>{" "}
                      {/* {yard.Services.service1}, {yard.Services.service2} */}
                    </li>
                    <li className="listcontent">
                      <span>Additional Information:</span> {yard.description}
                    </li>
                  </ul>
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
