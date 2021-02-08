import React, { Component } from "react";
import "./subscription.css";

class BidSubscription extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 class="news-heading">Simple, Straightforward Pricing</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 subscriptioncol">
            <div className="uppersection">
              <h3 className="plantype">SILVER</h3>
              <h1 className="planprice">
                <span className="currency">$</span> 0
              </h1>
              <p className="billed">billed monthly</p>
              <p className="yp">( $0 Per year)</p>
              <button type="button" className="subscriptionbtn">
                START NOW
              </button>
            </div>
            <div className="middlesection">
              <p className="plantext">0 Credit Point</p>
            </div>
            {/* <div className="lowersection">
              <li className="planlist">
                Colour Schema: <span className="sublist">Black & White</span>
              </li>
            </div> */}
          </div>

          <div className="col-lg-4 subscriptioncol">
            <div className="uppersection">
              <h3 className="plantype">GOLD</h3>
              <h1 className="planprice">
                <span className="currency">$</span> 199
              </h1>
              <p className="billed">billed monthly</p>
              <p className="yp">( $2149.2 Per year)</p>
              <button type="button" className="subscriptionbtn">
                START NOW
              </button>
            </div>
            <div className="middlesection">
              <p className="plantext">50 Credit Points</p>
            </div>
            {/* <div className="lowersection">
              <li className="planlist">
                Colour Schema: <span className="sublist">Colour</span>
              </li>
            </div> */}
          </div>
          <div className="col-lg-4 subscriptioncol">
            <div className="uppersection">
              <h3 className="plantype">PLATINUM</h3>
              <h1 className="planprice">
                <span className="currency">$</span> 99
              </h1>
              <p className="billed">billed monthly</p>
              <p className="yp">( $1069.2 Per year)</p>
              <button type="button" className="subscriptionbtn">
                START NOW
              </button>
            </div>
            <div className="middlesection">
              <p className="plantext">25 Credit Points</p>
            </div>
            {/* <div className="lowersection">
              <li className="planlist">
                Colour Schema: <span className="sublist">Colour</span>
              </li>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default BidSubscription;
