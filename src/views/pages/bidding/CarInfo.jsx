import React, { useState } from "react";
import {
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputFile,
  CLabel,
} from "@coreui/react";
import axios from "axios";

import "./carInfo.css";

const CarInfo = () => {
  const defaultState = {
    anti_brake_system: "",
    city_mileage: "",
    drive_type: "",
    engine: "",
    fuel_type: "",
    highway_mileage: "",
    made_in: "",
    make: "",
    model: "",
    overall_height: "",
    overall_length: "",
    overall_width: "",
    standard_seating: "",
    steering_type: "",
    style: "",
    transmission: "",
    trim: "",
    type: "",
    vin: "",
    year: "",
  };
  const [isModal, setIsModal] = useState(false);
  const [vinInfo, setVinInfo] = useState("");
  const [carDetail, setCarDetail] = useState(defaultState);

  const getCarDetail = (vinNumber) => {
    const options = {
      method: "GET",
      url: "https://vin-decoder7.p.rapidapi.com/vin",
      params: { vin: vinNumber },
      headers: {
        "x-rapidapi-key": "9e9ff08d62msh881848c82a26d42p106383jsnb0fe152c86df",
        "x-rapidapi-host": "vin-decoder7.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const res = response.data.specifications;
        setCarDetail({ ...res });
        setIsModal(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (vinInfo.length == 17) {
      getCarDetail(vinInfo);
    }
  };
  const handleVinChange = (e) => {
    setVinInfo(e.target.value.toUpperCase());
  };
  return (
    <div className="bidFormCard">
      <h2 className="formheading">Car Details</h2>
      <CForm onSubmit={handleSubmit}>
        <CFormGroup row>
          {/* <CCol xs="12" md="6" lg="6">
            <label>
              <CInput
                class="textfield"
                id="name"
                name="name"
                value={carDetail.owner}
                onChange={handleCarDetailChange}
                required
              />
              <span class="placeholderValue" placeholder="Owner Name">
                Owner Name
              </span>
            </label>
          </CCol> */}
          <CCol xs="12" md="12" lg="12">
            <label>
              <CInput
                class="textfield"
                id="vinNumber"
                name="VinNumber"
                value={vinInfo}
                onChange={handleVinChange}
                required
              />
              <span class="placeholderValue" placeholder="VIN">
                VIN
              </span>
            </label>
          </CCol>
        </CFormGroup>
        {isModal && (
          <div id="vinDetail">
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="antiBreakSystem"
                    name="antiBreakSystem"
                    value={carDetail.anti_brake_system}
                  />
                  <span
                    class="placeholderValue"
                    placeholder="Anti Break System"
                  >
                    Anti Break System
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="cityMileage"
                    name="cityMileage"
                    value={carDetail.city_mileage}
                  />
                  <span class="placeholderValue" placeholder="City Mileage">
                    City Mileage
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="driveType"
                    name="driveType"
                    value={carDetail.drive_type}
                  />
                  <span class="placeholderValue" placeholder="Drive Type">
                    Drive Type
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="engine"
                    name="engine"
                    value={carDetail.engine}
                  />
                  <span class="placeholderValue" placeholder="Engine">
                    Engine
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="fuelType"
                    name="fuelType"
                    value={carDetail.fuel_type}
                  />
                  <span class="placeholderValue" placeholder="Fuel Type">
                    Fuel Type
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="highwayMileage"
                    name="highwayMileage"
                    value={carDetail.highway_mileage}
                  />
                  <span class="placeholderValue" placeholder="Highway Mileage">
                    Highway Mileage
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="madeIn"
                    name="madeIn"
                    value={carDetail.made_in}
                  />
                  <span class="placeholderValue" placeholder="Made In">
                    Made In
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="make"
                    name="make"
                    value={carDetail.make}
                  />
                  <span class="placeholderValue" placeholder="Make">
                    Make
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="model"
                    name="model"
                    value={carDetail.model}
                  />
                  <span class="placeholderValue" placeholder="Model">
                    Model
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="overallHeight"
                    name="overallHeight"
                    value={carDetail.overall_height}
                  />
                  <span class="placeholderValue" placeholder="Overall Height">
                    Overall Height
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="overallLength"
                    name="overallLength"
                    value={carDetail.overall_length}
                  />
                  <span class="placeholderValue" placeholder="Overall Length">
                    Overall Length
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="overallWidth"
                    name="overallWidth"
                    value={carDetail.overall_width}
                  />
                  <span class="placeholderValue" placeholder="Overall Width">
                    Overall Width
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="standardSeating"
                    name="standardSeating"
                    value={carDetail.standard_seating}
                  />
                  <span class="placeholderValue" placeholder="Standard Seating">
                    Standard Seating
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="steeringSeating"
                    name="steeringSeating"
                    value={carDetail.steering_type}
                  />
                  <span class="placeholderValue" placeholder="Steering Seating">
                    Steering Seating
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="style"
                    name="style"
                    value={carDetail.style}
                  />
                  <span class="placeholderValue" placeholder="Style">
                    Style
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="transmission"
                    name="transmission"
                    value={carDetail.transmission}
                  />
                  <span class="placeholderValue" placeholder="Transmission">
                    Transmission
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="trim"
                    name="trim"
                    value={carDetail.trim}
                  />
                  <span class="placeholderValue" placeholder="Trim">
                    Trim
                  </span>
                </label>
              </CCol>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="type"
                    name="type"
                    value={carDetail.type}
                  />
                  <span class="placeholderValue" placeholder="Type">
                    Type
                  </span>
                </label>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6" lg="6">
                <label>
                  <CInput
                    class="textfield"
                    id="year"
                    name="year"
                    value={carDetail.year}
                  />
                  <span class="placeholderValue" placeholder="Year">
                    Years
                  </span>
                </label>
              </CCol>
            </CFormGroup>
          </div>
        )}
        <CFormGroup row>
          <CCol xs="12" md="12" lg="12">
            <CInput type="submit" value="Get VIN Automatically" />
          </CCol>
        </CFormGroup>
      </CForm>
    </div>
  );
};

export default CarInfo;
