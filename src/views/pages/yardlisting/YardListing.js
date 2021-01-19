import React from "react";
import "./yardlist.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
class YardListing extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 zoom">
            <div className="row">
              <h2 className="news-heading">Yard Listing</h2>
            </div>

            <div class="search-container" style={{ marginTop: "20px" }}>
              <form action="/action_page.php">
                <input type="text" placeholder="Search By City" name="search" />
                <button type="submit" class="searchsubmit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="listing">
              <div className="yardlogo">
                <img src={"./avatars/samirtruck.png"} />
              </div>

              <div className="yarddetail">
                <h2 className="yardname">Samir Truck Wreckers</h2>
                <p className="email">
                  <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  samircarremoval@gmail.com
                </p>
                <p className="phone">
                  <i class="fa fa-phone" aria-hidden="true"></i> 0402 639 249
                </p>
                <p className="address">
                  <i class="fa fa-location-arrow"></i> 1/48, Pendlebury Road,
                  Cardiff, 2285, Newcastle, New South Wales
                </p>
                <Link to="/detailpage">
                  {" "}
                  <p className="link">Read More</p>
                </Link>
              </div>
            </div>
            <div className="listing">
              <div className="yardlogo">
                <img src={"./avatars/samirtruck.png"} />
              </div>

              <div className="yarddetail">
                <h2 className="yardname">Samir Truck Wreckers</h2>
                <p className="email">
                  <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  samircarremoval@gmail.com
                </p>
                <p className="phone">
                  <i class="fa fa-phone" aria-hidden="true"></i> 0402 639 249
                </p>
                <p className="address">
                  <i class="fa fa-location-arrow"></i> 1/48, Pendlebury Road,
                  Cardiff, 2285, Newcastle, New South Wales
                </p>
                <Link to="/detailpage">
                  {" "}
                  <p className="link">Read More</p>
                </Link>
              </div>
            </div>
            <div className="listing">
              <div className="yardlogo">
                <img src={"./avatars/samirtruck.png"} />
              </div>

              <div className="yarddetail">
                <h2 className="yardname">Samir Truck Wreckers</h2>
                <p className="email">
                  <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  samircarremoval@gmail.com
                </p>
                <p className="phone">
                  <i class="fa fa-phone" aria-hidden="true"></i> 0402 639 249
                </p>
                <p className="address">
                  <i class="fa fa-location-arrow"></i> 1/48, Pendlebury Road,
                  Cardiff, 2285, Newcastle, New South Wales
                </p>
                <Link to="/detailpage">
                  {" "}
                  <p className="link">Read More</p>
                </Link>
              </div>
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

export default YardListing;
