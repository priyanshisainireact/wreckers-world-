import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import SubscriptionForm from "../views/pages/subscription/SubscriptionForm";
class Footer extends Component {
  render() {
    return (
      <>
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {/* <img src={'./avatars/WreckersLogowhitegreen.png'} style={{height:'auto'}} />
                 <p>Wreckers World is a platform and “Go To Place” for Car, SUV, Four Wheel Drive (4WD), Mini Trucks, Truck enthusiasts, the Wreckers businesses, Recyclers and businesses which help reuse and recycle the wealth in Used Vehicles. It helps in providing a logical processing of the used and old vehicles which have served its owners and now needs to be handled in a way so that it keeps our environment clean and also the remaining value in it is utilized well. 

                  A vehicle enthusiast would get news on Vehicles, New Launches, Events and 
                  Blogs, a Wrecker can list their business, provide visibility to their business,
                   Car owners can list their Cars for Sell, Recyclers can connect with Wreckers 
                   world wide.</p> */}
                <div className="footerrow">
                  <div className="footercol">
                    <h5 className="footerheading">Top Brands </h5>
                    <li className="FooterBrandLi">Home</li>
                    <Link to="/about">
                      {" "}
                      <li className="FooterBrandLi">About Us</li>
                    </Link>
                    <Link to="/carlisting">
                      <li className="FooterBrandLi">Car Listing</li>
                    </Link>
                    <Link to="/yardlisting">
                      {" "}
                      <li className="FooterBrandLi">Yard Listing</li>
                    </Link>
                    <Link to="/privacypolicy">
                      <li className="FooterBrandLi">Privacy Policy</li>
                    </Link>
                    <Link to="/terms&condition">
                      <li className="FooterBrandLi">Terms and Conditions</li>
                    </Link>
                  </div>
                  <div className="footercol">
                    <Link to="/sellingcar">
                      <li className="FooterBrandLi">Selling a Car</li>
                    </Link>
                    <Link to="/towingprocess">
                      {" "}
                      <li className="FooterBrandLi">Towing Process</li>
                    </Link>
                    <Link to="/inside-the-wreckers-world">
                      {" "}
                      <li className="FooterBrandLi">
                        Inside the Wreckers World
                      </li>
                    </Link>
                    <Link to="/carsalvage">
                      {" "}
                      <li className="FooterBrandLi">
                        How does a Car become Salvage?
                      </li>
                    </Link>
                    <Link to="/process">
                      {" "}
                      <li className="FooterBrandLi">Process</li>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <SubscriptionForm />
              </div>
              <div className="col-lg-4">
                <h5 className="footerheading">Contact Us </h5>
                <p className="footer-pera">Toll Free 0123456789</p>
                <p className="footer-pera">
                  Monday - Saturday (9:00AM to 7:00PM IST)
                </p>
                <p className="footer-pera">Email: info@wreckersworld.com</p>
                <h5 className="footerheading" style={{ marginTop: "15px" }}>
                  Connect With Us{" "}
                </h5>

                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter">
                  {" "}
                </a>
                <a href="#" class="fa fa-pinterest">
                  {" "}
                </a>
                <a href="#" class="fa fa-linkedin">
                  {" "}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="FooterMid">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <li className="footerli">Home</li>
                <Link to="/about">
                  {" "}
                  <li className="footerli">About Us</li>
                </Link>
                <Link to="/carlisting">
                  <li className="footerli">Car Listing</li>
                </Link>
                <Link to="/yardlisting">
                  {" "}
                  <li className="footerli">Yard Listing</li>
                </Link>
                <Link to="/privacypolicy">
                  <li className="footerli">Privacy Policy</li>
                </Link>
                <Link to="/terms&condition">
                  <li className="footerli">Terms and Conditions</li>
                </Link>

                <Link to="/sellingcar">
                  <li className="footerli">Selling a Car</li>
                </Link>
                <Link to="/towingprocess">
                  {" "}
                  <li className="footerli">Towing Process</li>
                </Link>
                <Link to="/inside-the-wreckers-world">
                  {" "}
                  <li className="footerli">Inside the Wreckers World</li>
                </Link>
                <Link to="/carsalvage">
                  {" "}
                  <li className="footerli">How does a Car become Salvage?</li>
                </Link>
                <Link to="/process">
                  {" "}
                  <li className="footerli">Process</li>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="footerbottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <h6 className="footer-heading">Australia</h6>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
                <li className="footer-li">Wreckers In Acacia Ridge</li>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
