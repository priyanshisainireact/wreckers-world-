import React, { useState } from "react";
import "./bidding.css";

const CarPriceCalculator = () => {
  const [price, setPrice] = React.useState(0);
  const [ty, setty] = React.useState();
  const initialCarDetail = {
    carAge: "",
    carCondition: "",
    carMake: "",
    vehicleType: "",
  };
  const [carAge, setCarAge] = useState(0);
  const [carDetail, setCarDetail] = React.useState(initialCarDetail);
  const handleChange = (e) => {
    setCarDetail({ ...carDetail, [e.target.name]: e.target.value });
    setPrice(price + parseInt(e.target.value));
  };

  const handleCarDetailFormSubmit = (e) => {
    e.preventDefault();
    setty(carDetail);
    console.log(ty);
    setCarDetail(initialCarDetail);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="py-2">
      <div className="col-lg-12 text-center ">
        <h2>Total Price: {price}</h2>
      </div>
      <form onSubmit={handleCarDetailFormSubmit}>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group">
              <label for="carAge">Car Age:</label>
              <select
                class="form-control"
                id="carAge"
                value={carDetail.carAge}
                name="carAge"
                onChange={handleChange}
              >
                <option value="0">18+ Years</option>
                <option value="50">18-15 Years</option>
                <option value="100">15-10 Years</option>
                <option value="200">10-5 Years</option>
                <option value="300">5-0 Years</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label for="carCondition">Car Condition:</label>
              <select
                class="form-control"
                id="carCondition"
                name="carCondition"
                onChange={handleChange}
              >
                <option value="300">9+</option>
                <option value="200">9-6</option>
                <option value="100">6-4</option>
                <option value="50">4-2</option>
                <option value="0">2-1</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="form-group">
              <label for="carMake">Car Make:</label>
              <select
                class="form-control"
                id="carMake"
                name="carMake"
                onChange={handleChange}
              >
                <option value="150">BMW, Mercedes</option>
                <option value="100">Toyota, Honda</option>
                <option value="50">Holdon, Nissan, Hyundai </option>
                <option value="0">Others</option>
              </select>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-group">
              <label for="vehicleType">Vehicle Type:</label>
              <select
                class="form-control"
                id="vehicleType"
                name="vehicleType"
                onChange={handleChange}
              >
                <option value="350">Truck</option>
                <option value="250">4WD/ Pick Up Truck/ Vans</option>
                <option value="250">Regular Cars</option>
              </select>
            </div>
          </div>
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={handleFormSubmit}>
        <div className="inputValueRange">
          <div className="row py-1">
            <div className="col-lg-2 offset-lg-5 font text-center">
              Excellent
            </div>
            <div className="col-lg-2 font text-center">Very Good</div>
            <div className="col-lg-2 font text-center">Good</div>
            <div className="col-lg-2 font text-center">Fair</div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <label for="points" className="font">
                Base Price:
              </label>
            </div>
            <div className="col-lg-9">
              <input
                className="form-control"
                type="range"
                id="points"
                name="points"
                min="0"
                max="4"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarPriceCalculator;
