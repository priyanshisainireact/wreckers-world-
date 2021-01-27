import React, { Component } from "react";
import "./StaticPages.css";
import Sidebar from "../sidebar/Sidebar";
class SellingCar extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 zoom">
            <h2 class="news-heading">Selling a car</h2>
            <div className="staticdetails">
              <div class="row">
                <div class="col-lg-6">
                  <img src={"./avatars/Best-Time-to-Sell-Your-Car.jpg"} />
                </div>
                <div class="col-lg-6">
                  <p>
                    Once a car has survived beyond its life cycle, with each
                    passing day, the parts wear out and the amount of
                    expenditure on its maintenance keeps rising. When the car
                    reaches such a point it is always a better choice to get rid
                    of it, but getting rid of the car might sound like an easy
                    task but when the reality kicks in it is then the innocent
                    seller realizes that there is way much more to handle than
                    what meets the eye!
                  </p>
                </div>
              </div>
              <p>
                The prime reason why the process is prolonged is that the seller
                finds himself in the grip of unending confusion when he looks
                for a reliable one among the various Car Wreckers in your City
                or Suburb. Making a choice is never an easy task as all of the
                Car Wreckers make the same tall claims and there is no credible
                way to check whether they are authentic or not! As a result the
                seller finds himself in the midst of a chaos that eventually
                leads to him dropping the idea altogether! At Wreckers World we
                provide you a brief understanding of the process and also have a
                listing of Wreckers at different part of the world from which
                you can possibly find Wreckers to whom the car can be sold for
                cash!
                <br />
                We list below a good list of reasons to choose a great wrecker.
              </p>
              <h4 className="StaticHeading">
                Simple and fast way to get a quote for your car
              </h4>
              <p>
                Getting the quote for your car has always been considered to be
                a task that involves a lot of research and a lot of digging in.
                You can’t just trust the first buyer that you meet! Unless you
                are in such a hurry that you don’t even have time to die!
                Without a proper research you can never come to know about the
                best price that you can get from your old Car. A good Wrecker
                would make the long process of finding and negotiating a buyer
                much simpler and shorter. All that you need to do is call them
                up and apprise them of the condition of your car. Thereafter,
                based on the information provided by you, their Auto Appraisers
                will analyse the true worth of the car and offer you a quote
                closest to that value. This not only helps you to determine the
                true value of your car but also grants you the opportunity to
                compare the price quote with the quotes from other Car Wreckers
                in same City.
              </p>
              <h4 className="StaticHeading">
                Towing/moving of the car made easy
              </h4>
              <p>
                Since you are considering selling your car it can be very well
                assumed that it is no longer in a condition to be driven. To
                convey an immobilized vehicle to a yard can only be done with
                the assistance of a towing agency – At least that’s what is
                believed by most of the masses. Another factor which is not a
                mystery is the fact that it is not a very pocket friendly
                service that can be easily fit in a tight budget. This might
                seem like pretty scary situation to undertake but the same can
                transform into a walk in the park. You can get the car towed by
                merely making a call to the Wrecker and specifying a time and
                place for the pickup of the vehicle. A towing team will be on
                your doorstep on the specified time and your car will be out of
                your garage like a bat out of hell! The beauty of this deal does
                not lie in the fact that you got to move your car without even
                moving from your couch, rather in the fact that you can avail
                this service without having to worry about cost, because there
                won’t be any! Like the other services offered by Wreckers this
                service is also free of cost for the sellers, which is something
                that is not facilitated by some Wreckers.
              </p>
              <h4 className="StaticHeading">
                Hassle-free completion of the paperwork and on the spot payment
              </h4>
              <p>
                The corroboration of any operation entirely hangs on the
                paperwork of that transaction. This is the step that exhibits
                the conclusion of the trade and provides legal aid to both the
                buyer and the seller. Now, for a person who is conversant with
                the ins and outs of the procedure it automatically becomes a
                much easier task as compared to the person who is doing it for
                the first time. Many people sell their cars for the first time
                and want the deal to be an absolute perfect one, which although
                seems like too much to ask but such is human nature! Many a
                times such a person end up indulging in deals that gives them
                more loss than profit and they are left reprimanding their own
                decisions.
                <br />
                You don’t have to worry about this as well if you choose to deal
                with a good Wrecker. They are equipped with a team of
                professionals employed specifically for the completion of the
                paperwork and formalities and are trained in a manner to get the
                paperwork finished at the fastest pace possible. What adds the
                cherry on the top is the fact that you won’t have to pay any
                amount to avail this service.
                <br />
                As soon as the paperwork and the formalities are done with you
                will be handed over the cash as decided on the initial stages of
                the transaction. What more could one ask in a car deal like
                such!!
                <br />
                To conclude we would suggest that it is much better that you
                stop wasting any more time entertaining the confusion that seems
                immortal at the moment and make the one call that will give you
                the best deal possible!
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

export default SellingCar;
