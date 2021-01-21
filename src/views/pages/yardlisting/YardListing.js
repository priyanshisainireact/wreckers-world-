import React, { useEffect, useState } from "react";
import "./yardlist.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { yardDetail } from "./yardDetail";
const YardListing = () => {
  const [yardList, setYardList] = useState(yardDetail);

  const [term, setTerm] = useState("samir car removals");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 zoom">
          <div className="row">
            <h2 className="news-heading">Yard Listing</h2>
          </div>

          <div className="search-container" style={{ marginTop: "20px" }}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search By City"
                name="search"
                value={term}
                onChange={handleChange}
              />
              <button type="submit" class="searchsubmit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
          {yardList.map((yard) => {
            return (
              <div className="listing" key={yard.id}>
                <div className="yardlogo">
                  <img src={yard.Logo} />
                </div>

                <div className="yarddetail">
                  <h2 className="yardname">{yard.Name}</h2>
                  <p className="email">
                    <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                    {yard.Email}
                  </p>
                  <p className="phone">
                    <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                    {yard.Phone}
                  </p>
                  <p className="address">
                    <i className="fa fa-location-arrow"></i> {yard.Address}
                  </p>
                  <Link to="/detailpage">
                    {" "}
                    <p className="link">Read More</p>
                  </Link>
                </div>
              </div>
            );
          })}
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
};

export default YardListing;
