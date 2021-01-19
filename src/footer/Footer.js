import React, { Component } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import SubscriptionForm from '../views/pages/subscription/SubscriptionForm';
class Footer extends Component{
    render(){
        return(
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
                       <li className="footerli">Home</li>
                        <li className="footerli">About Us</li>
                       <Link to="/carlisting"><li className="footerli">Car Listing</li></Link> 
                       <Link to="/yardlisting"> <li className="footerli">Yard Listing</li></Link> 
                        <li className="footerli">Privacy Policy</li>
                        <li className="footerli">Terms and Conditions</li>
                       </div>
                       <div className="footercol">
                       <li className="footerli">Selling a Car</li>
                        <li className="footerli">Towing Process</li>
                        <li className="footerli">Inside the Wreckers World</li>
                        <li className="footerli">How does a Car become Salvage?</li>
                       </div>
                   </div>
                </div>
                <div className="col-lg-4">
                    <SubscriptionForm/>
                </div>
                <div className="col-lg-4">
                  <h5 className="footerheading">Contact Us </h5>
                  <p className="footer-pera">Toll Free 0123456789</p>
                  <p className="footer-pera">Monday - Saturday (9:00AM to 7:00PM IST)
</p>
                  <p className="footer-pera">Email: info@wreckersworld.com</p>
                  <h5 className="footerheading" style={{marginTop: '15px'}}>Connect With Us </h5>
               
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-twitter"> </a>
                    <a href="#" class="fa fa-pinterest"> </a>
                    <a href="#" class="fa fa-linkedin"> </a>
                   
                </div>

                </div>
               
            </div>
        </section>
        <section id="footerbottom">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                <h6  className="footer-heading">Australia</h6>
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
        )
    }
}

export default Footer;


