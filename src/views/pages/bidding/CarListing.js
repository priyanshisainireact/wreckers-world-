import React from "react";
import "./bidding.css";
import { Link } from "react-router-dom";
import ListingSidebar from "./Listingsidebar";
import BiddingItem from "../homepage/HomepageItem/BiddingItem";

class CarListing extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ListingSidebar />
          </div>

          <div className="col-lg-8 zoom">
            <div className="row">
              <h2 className="news-heading">
                Just Arrived For Wrecking – Bid Now
              </h2>
            </div>

            <div class="search-container" style={{ marginTop: "20px" }}>
              <form action="/action_page.php">
                <input type="text" placeholder="Search By City" name="search" />
                <button type="submit" class="searchsubmit">
                  <i class="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="usercarlist ">
              <div className="row">
                {/* <div class="caruserbidcol-1">
                                  <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                                  </div>
                                  <div class="caruserbidcol-2">
                                  <div className="biddetailscol">
                                  <h2 className="bidtitlecol">Lorem Ipsum</h2>
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <button type="button" className="managebtn">Bid Now </button>
                                </div> 
                                  </div> */}
                <div className="col-lg-4">
                  <div className="bid-card">
                    <img
                      src={"./avatars/CLS_IMG_1604990586155.jpeg"}
                      style={{ height: "235px", width: "100%" }}
                      className="homebidimage"
                    />

                    <img
                      src={"./avatars/price.svg"}
                      className="pricebidimage"
                    />
                    <p className="greatdeal">
                      <i class="fa fa-handshake-o"></i> Great Deal
                    </p>
                    <h2 className="bidtitleinternal ">
                      2013 Hyundai Eon MAGNA PLUS
                    </h2>

                    <div className="biddetailss">
                      <p className="bidpricelist"> $ 200</p>

                      <p>
                        <span>Bids Placed :</span> No bids placed
                      </p>
                      <p>
                        <span>Ending :</span> 1 day
                      </p>
                      <button type="button" className="managebtn">
                        Bid Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bid-card">
                    <img
                      src={"./avatars/bidcar.jpg"}
                      style={{ height: "235px", width: "100%" }}
                      className="homebidimage"
                    />
                    <p className="greatdeal">
                      <i class="fa fa-handshake-o"></i> Great Deal
                    </p>
                    <h2 className="bidtitleinternal ">
                      2011 Maruti Zen Estilo LXI
                    </h2>

                    <div className="biddetailss">
                      <p className="bidpricelist"> $ 200</p>
                      <p>
                        <span>Bids Placed :</span> No bids placed
                      </p>
                      <p>
                        <span>Ending :</span> 1 day
                      </p>
                      <button type="button" className="managebtn">
                        Bid Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bid-card">
                    <img
                      src={"./avatars/platemaskingfrontleftside_1608959454.jpg"}
                      style={{ height: "235px", width: "100%" }}
                      className="homebidimage"
                    />
                    <img
                      src={"./avatars/price.svg"}
                      className="pricebidimage"
                    />
                    <p className="greatdeal">
                      <i class="fa fa-handshake-o"></i> Great Deal
                    </p>
                    <h2 className="bidtitleinternal ">2011 Maruti Alto LXI</h2>

                    <div className="biddetailss">
                      <p className="bidpricelist"> $ 200</p>
                      <p>
                        <span>Bids Placed :</span> No bids placed
                      </p>
                      <p>
                        <span>Ending :</span> 1 day
                      </p>
                      <button type="button" className="managebtn">
                        Bid Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <div class="caruserbidcol-1">
                                  <img src={'./avatars/bidcar.jpg'} style={{height:'100%',width:'100%'}} />
                                  </div>
                                  <div class="caruserbidcol-2">
                                  <div className="biddetailscol">
                                  <h2 className="bidtitlecol">Lorem Ipsum</h2>
                                    <p><span>Current Price :</span> 200</p>
                                    <p><span>Bids Placed :</span> No bids placed</p>
                                    <p><span>Ending :</span> 1 day</p>
                                    <button type="button" className="managebtn">Bid Now </button>
                                </div> 
                                  </div> */}
                <div className="col-lg-4">
                  <div className="bid-card">
                    <img
                      src={"./avatars/platemaskingfrontleftside_1610009796.jpg"}
                      style={{ height: "235px", width: "100%" }}
                      className="homebidimage"
                    />
                    <p className="greatdeal">
                      <i class="fa fa-handshake-o"></i> Great Deal
                    </p>
                    <h2 className="bidtitleinternal ">
                      2014 Maruti Alto K10 VXI
                    </h2>

                    <div className="biddetailss">
                      <p className="bidpricelist"> $ 200</p>
                      <p>
                        <span>Bids Placed :</span> No bids placed
                      </p>
                      <p>
                        <span>Ending :</span> 1 day
                      </p>
                      <button type="button" className="managebtn">
                        Bid Now{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="bid-card">
                    <img
                      src={"./avatars/frontleftside_1607844391.jpg"}
                      style={{ height: "235px", width: "100%" }}
                      className="homebidimage"
                    />
                    <img
                      src={"./avatars/price.svg"}
                      className="pricebidimage"
                    />
                    <p className="greatdeal">
                      <i class="fa fa-handshake-o"></i> Great Deal
                    </p>
                    <h2 className="bidtitleinternal ">
                      2015 Maruti Celerio VXI AMT
                    </h2>

                    <div className="biddetailss">
                      <p className="bidpricelist"> $ 200</p>
                      <p>
                        <span>Bids Placed :</span> No bids placed
                      </p>
                      <p>
                        <span>Ending :</span> 1 day
                      </p>
                      <button type="button" className="managebtn">
                        Bid Now{" "}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="bid-card">
                    <img
                      src={"./avatars/frontleftside_1608116255.jpg"}
                      style={{ height: "235px", width: "100%" }}
                      className="homebidimage"
                    />
                    <img
                      src={"./avatars/price.svg"}
                      className="pricebidimage"
                    />
                    <p className="greatdeal">
                      <i class="fa fa-handshake-o"></i> Great Deal
                    </p>
                    <h2 className="bidtitleinternal ">
                      2016 Hyundai Grand i10 ASTA
                    </h2>

                    <div className="biddetailss">
                      <p className="bidpricelist"> $ 200</p>
                      <p>
                        <span>Bids Placed :</span> No bids placed
                      </p>
                      <p>
                        <span>Ending :</span> 1 day
                      </p>
                      <button type="button" className="managebtn">
                        Bid Now{" "}
                      </button>
                    </div>
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

export default CarListing;
