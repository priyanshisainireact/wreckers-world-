import React, { useEffect } from "react";
import "./bidding.css";
import Sidebar from "../sidebar/Sidebar";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CInputFile,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";
import { dataCountries, dataStates, dataCities } from "./data.js";
import { firestore } from "../../../firebase/firebase.utils";
import CarInfo from "./CarInfo";
import CarPriceCalculator from "./CarPriceCalculator";

import axios from "axios";

const BidForm = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  const [countryName, setCountryName] = React.useState(dataCountries);
  const [stateName, setStateName] = React.useState(null);
  const [cityName, setCityName] = React.useState(null);
  const [uploadImage, setUploadImage] = React.useState([]);
  const [person, setPerson] = React.useState({});
  const [isModal, setIsModal] = React.useState(false);

  const toggle = () => {
    setIsModal(!isModal);
  };

  const defaultState = {
    carDetail: "",
    name: "",

    email: "",
    country: "",
    state: "",
    city: "",

    openingPrice: "",
    lowestPrice: "",
    incrementalvalue: "",
    endingDate: "",
    service: "",
    additionalInformation: "",
  };

  const [userDetail, setUserDetail] = React.useState(defaultState);

  const [updatecheckbox, setUpdateCheckbox] = React.useState({
    paymentMethodCheck: false,
    paymentMethodCash: false,
    paymentMethodCard: false,
  });

  React.useEffect(() => {
    const personNew = person;
    firestore.collection("carList").add({ personNew });
  }, [person]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson({ ...userDetail });

    setUserDetail(defaultState);
    setUploadImage([]);
    setUpdateCheckbox({
      paymentMethodCheck: false,
      paymentMethodCash: false,
      paymentMethodCard: false,
    });
  };
  const handleImageChange = (e) => {
    setUploadImage({ ...uploadImage, ...e.target.files });
  };

  const handlecheckBox = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setUpdateCheckbox({ ...updatecheckbox, [name]: checked });
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const hasState = stateName;
  const hasCity = cityName;

  // React.useEffect(() => {

  // }, [userDetail.vinNumber]);

  return (
    <div className="container">
      {console.log({ uploadImage })}
      <div className="row">
        <div className="col-lg-8">
          <CRow>
            <CCol xs="12" md="12">
              <CCard>
                <CCardHeader>
                  <h2 className="form-news-heading">List Your Car</h2>
                </CCardHeader>
                <CCardBody>
                  <CForm onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="bidFormCard">
                      <h2 className="formheading">User</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="12">
                          <CInput
                            id="carDetail"
                            name="carDetail"
                            placeholder="User Name"
                            value={userDetail.carDetail}
                            onChange={handleChange}
                          />
                        </CCol>
                      </CFormGroup>
                    </div>

                    <div className="bidFormCard">
                      <h2 className="formheading">Car Owners Details</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="name"
                            name="name"
                            placeholder="Owner Name"
                            value={userDetail.name}
                            onChange={handleChange}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="phoneNumber"
                            name="phoneNumber"
                            value={userDetail.phoneNumber}
                            onChange={handleChange}
                            placeholder=" Phone Number"
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="name"
                            name="name"
                            placeholder="Pick Up Address"
                            value={userDetail.name}
                            onChange={handleChange}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="phoneNumber"
                            name="phoneNumber"
                            value={userDetail.phoneNumber}
                            onChange={handleChange}
                            placeholder="Address Of Owner"
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CSelect
                            custom
                            name="country"
                            id="country"
                            // onChange={handleChangeCountry}
                            value={userDetail.country}
                          >
                            {countryName.map((country) => {
                              return (
                                <option
                                  key={country.countryId}
                                  value={country.countryName}
                                >
                                  {country.countryName}
                                </option>
                              );
                            })}
                          </CSelect>
                        </CCol>

                        <CCol xs="12" md="9" lg="6">
                          <CSelect
                            custom
                            name="state"
                            id="state"
                            disabled={!hasState}
                            // onChange={handleChangeState}
                            value={userDetail.state}
                          >
                            <option value="0">Please select your state</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CSelect
                            custom
                            name="city"
                            id="city"
                            disabled={!hasCity}
                            // onChange={handleChangeCity}
                            value={userDetail.city}
                          >
                            <option value="0">Please select your city</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                      </CFormGroup>
                    </div>
                    <CarInfo />

                    <div className="bidFormCard">
                      <h2 className="formheading">Bidding Preferences</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="openingPrice"
                            name="openingPrice"
                            placeholder="Bid Start Value"
                            onChange={handleChange}
                            value={userDetail.openingPrice}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="lowestPrice"
                            name="lowestPrice"
                            value={userDetail.lowestPrice}
                            onChange={handleChange}
                            placeholder="Bid Incremental Value"
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="openingPrice"
                            name="openingPrice"
                            placeholder="Expires In"
                            onChange={handleChange}
                            value={userDetail.openingPrice}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CLabel>Payment Method</CLabel>
                          <div class="checkflex">
                            <div className="check">
                              <input
                                type="checkbox"
                                id="paymentMethodCard"
                                name="paymentMethodCard"
                                onChange={handlecheckBox}
                                checked={userDetail.paymentMethodCard}
                              />
                              <label for="vehicle3"> Card</label>
                            </div>
                            <div className="check">
                              <input
                                type="checkbox"
                                id="paymentMethodCash"
                                name="paymentMethodCash"
                                onChange={handlecheckBox}
                                checked={userDetail.paymentMethodCash}
                              />
                              <label for="vehicle3"> Cash</label>
                            </div>
                            <div className="check">
                              <input
                                type="checkbox"
                                id="paymentMethodCheck"
                                name="paymentMethodCheck"
                                onChange={handlecheckBox}
                                checked={userDetail.paymentMethodCheck}
                              />
                              <label for="vehicle3"> Cheque</label>
                            </div>
                          </div>
                        </CCol>
                      </CFormGroup>
                      <div className="col-lg-12 text-center py-3">
                        <button
                          clasName="btn btn-lg btn-primary"
                          onClick={toggle}
                        >
                          Check Car Price
                        </button>
                        {isModal && <CarPriceCalculator />}
                      </div>
                    </div>
                    <div className="bidFormCard">
                      <h2 className="formheading">Additional Detail</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="12">
                          <CTextarea
                            name="additionalInformation"
                            id="additionalInformation"
                            rows="9"
                            placeholder="Additional Information"
                            value={userDetail.additionalInformation}
                            onChange={handleChange}
                          />
                        </CCol>
                      </CFormGroup>
                    </div>

                    <CButton
                      type="submit"
                      size="sm"
                      color="primary"
                      className="formBtn"
                    >
                      <CIcon name="cil-scrubber" /> Submit
                    </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </div>
        <div className="col-lg-4" lg="6">
          <Sidebar />
          <Sidebar />
          <div className="row">
            <div className="col-lg-6">
              <img src={"./avatars/Banner.png"} style={{ height: "auto" }} />
            </div>
            <div className="col-lg-6">
              <img
                src={"./avatars/samirBannerAd1.png"}
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidForm;
