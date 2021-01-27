import React, { Component } from "react";
import "./StaticPages.css";
import Sidebar from "../sidebar/Sidebar";
class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 zoom">
            <h2 class="news-heading">Privacy Policy</h2>
            <div className="staticdetails">
              <p>
                These are Privacy Policy followed by Wreckers World promoted by
                CloudMynds. We assure to protect your privacy. Any requests
                raised by Wreckers World to provide personal information of
                users during the usage of our website, we follow the following
                Privacy rules:
                <br />
                Your Personal Information: We collect your personal information
                like your name, email address and phone number when you register
                for consultation or send enquiry for getting our services.
                <br />
                Personal information collected by Wreckers World will depend on
                the circumstances of collection and on the services that we are
                providing to you and may include:
              </p>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> identification
                details, which may include name, birth date, gender, security
                questions and answers;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> contact
                information which may include email address and mobile phone
                number;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> bank account and
                credit account details;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> user IDs and
                passwords;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> services provided
                to you, including saved items and searches;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> business
                information, such as ABN (Australian Business Number) and
                licence number;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> information
                submitted to the Wreckers World website, for example vehicle
                details and pricing;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> information about
                the devices on which you visit Wreckers World, and your
                activities on those devices or sites;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> third party
                account details (for example where you sign in through a social
                network);
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> your public
                social profile information (e.g. name, profile picture) together
                with the email address you use to log into your social media
                account;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> records and
                content of communications with Wreckers World or any other
                person including records and content using Communications
                Services (as that term is defined in Wreckers World’s Terms and
                Conditions);
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> if you
                participate in any surveys we, or a third party service provider
                acting on our behalf, may conduct from time to time, personal
                information relating to your survey responses;
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> if you are
                applying for employment with us, personal information that is
                relevant to such employment; and
              </li>
              <li className="staticlist">
                <i class="fa fa-check" aria-hidden="true"></i> information
                obtained as a result of your use of our mobile website or
                application such as geo-locations and unique device identifiers.
              </li>
              <p>
                Please note that any records and content provided in hard copy
                format may be stored and scanned electronically by Wreckers
                World.
              </p>
              <h4 className="StaticHeading">How we use this information</h4>
              <p>
                Wreckers World use your personal Information to contact you and
                discuss the details of your project to maintain communication
                with you. We do not indulge in sharing or selling or renting any
                personal information collected with/to third parties for any
                purpose.
              </p>
              <h4 className="StaticHeading">Cookies</h4>
              <p>
                Our Website use cookies just for optimizing user experience
                while using. Still, you have rights to refuse cookies when
                cookies are being sent.
                <br />
                By accessing or using Wreckers World services, you agree to the
                collection, use and disclosure of your personal information in
                the manner described in this Privacy Policy. Words defined in
                the Wreckers World Terms and Conditions have the same meaning in
                this Privacy Policy.
                <br />
                We can change our privacy policy without any prior notice. So,
                please keep checking this website regularly. In case of any
                policy violation please write to us on askus@cloudmynds.com.
              </p>
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

export default PrivacyPolicy;
