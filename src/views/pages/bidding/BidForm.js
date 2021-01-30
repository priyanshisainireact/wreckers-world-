import React from "react";
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

const BidForm = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  const [countryName, setCountryName] = React.useState(dataCountries);
  const [stateName, setStateName] = React.useState(null);
  const [cityName, setCityName] = React.useState(null);
  const [uploadImage, setUploadImage] = React.useState([]);
  const [person, setPerson] = React.useState({});

  const [updatecheckbox, setUpdateCheckbox] = React.useState({
    paymentMethodCheck: false,
    paymentMethodCash: false,
    paymentMethodCard: false,
  });
  const defaultState = {
    carDetail: "",
    name: "",
    phoneNumber: "",
    email: "",
    country: "",
    state: "",
    city: "",
    vinNumber: "",
    openingPrice: "",
    lowestPrice: "",
    incrementalvalue: "",
    endingDate: "",
    service: "",
    additionalInformation: "",
  };
  const [userDetail, setUserDetail] = React.useState(defaultState);

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
                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="text-input">Car details  *</CLabel>
                  </CCol> */}
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="carDetail"
                          name="carDetail"
                          placeholder="Enter Make, Model, Year of Manufacture"
                          value={userDetail.carDetail}
                          onChange={handleChange}
                        />
                      </CCol>
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                          value={userDetail.name}
                          onChange={handleChange}
                        />
                      </CCol>
                    </CFormGroup>

                    {/*<CFormGroup row>
                   <CCol md="3">
                    <CLabel htmlFor="text-input">Name*</CLabel>
                  </CCol> 
                  <CCol xs="12" md="9">
                    <CInput id="text-input" name="text-input" placeholder="Enter Name" />
               
                  </CCol>
                </CFormGroup>*/}

                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="text-input">Phone Number*</CLabel>
                  </CCol> */}
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="phoneNumber"
                          name="phoneNumber"
                          value={userDetail.phoneNumber}
                          onChange={handleChange}
                          placeholder="Enter Phone Number"
                        />
                      </CCol>
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          type="email"
                          id="email"
                          name="email"
                          value={userDetail.email}
                          onChange={handleChange}
                          placeholder="Enter Email"
                          autoComplete="email"
                        />
                      </CCol>
                    </CFormGroup>
                    {/* <CFormGroup row>
                 <CCol md="3">
                    <CLabel htmlFor="email-input">Email Address *</CLabel>
                  </CCol> 
                  
                </CFormGroup>*/}

                    {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup> */}

                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="select">Select Country *</CLabel>
                  </CCol> */}
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
                          {/* <option value="0">Please select your country</option>
                          <option value="Australia">Australia</option>
                          <option value="Canada">Canada</option>
                          <option value="New Zealand">New Zealand</option>
                          <option value="U.S.A.">U.S.A.</option> */}
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
                    {/*<CFormGroup row>
                   <CCol md="3">
                    <CLabel htmlFor="select">Select State *</CLabel>
                  </CCol> 
                 
                </CFormGroup>*/}
                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="select">Select City *</CLabel>
                  </CCol> */}
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
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="vinNumber"
                          name="vinNumber"
                          placeholder="Enter VIN Number "
                          onChange={handleChange}
                          value={userDetail.vinNumber}
                        />
                      </CCol>
                    </CFormGroup>

                    {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">VIN Number</CLabel>
                  </CCol> 
                  
                </CFormGroup>*/}

                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="text-input">Opening Price</CLabel>
                  </CCol> */}
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="openingPrice"
                          name="openingPrice"
                          placeholder="Enter Opening Price "
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
                          placeholder="Enter Lowest Price to Accept "
                        />
                      </CCol>
                    </CFormGroup>
                    {/* <CFormGroup row>
                   <CCol md="3">
                    <CLabel htmlFor="text-input">Lowest Price to Accept</CLabel>
                  </CCol> 
                 
                </CFormGroup>*/}
                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="text-input">Incremental Value</CLabel>
                  </CCol> */}
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="incrementalvalue"
                          name="incrementalvalue"
                          placeholder="Enter Incremental Value"
                          value={userDetail.incrementalvalue}
                          onChange={handleChange}
                        />
                      </CCol>
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="endingDate"
                          name="endingDate"
                          placeholder="Enter Ending Date"
                          onChange={handleChange}
                          value={userDetail.endingDate}
                        />
                      </CCol>
                    </CFormGroup>
                    {/*   <CFormGroup row>
                <CCol md="3">
                    <CLabel htmlFor="text-input">Ending Date</CLabel>
                  </CCol> 
                 
                </CFormGroup>*/}

                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="text-input">Services provided by the business</CLabel>
                  </CCol> */}
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="service"
                          name="service"
                          placeholder="Enter Services provided by the business"
                          value={userDetail.service}
                          onChange={handleChange}
                        />
                      </CCol>
                      <CCol xs="12" md="9" lg="6">
                        <CInputFile
                          type="file"
                          id="image"
                          name="image"
                          multiple
                          custom
                          onChange={handleImageChange}
                        />
                        <CLabel
                          htmlFor="file-multiple-input"
                          variant="custom-file"
                        >
                          Choose Pictures Of Car
                        </CLabel>
                      </CCol>
                    </CFormGroup>

                    {/*  <CFormGroup row>
                 <CCol md="3">
                    <CLabel>Pictures Of Car</CLabel>
                  </CCol> 
                 
                </CFormGroup>*/}
                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="select">Payment Method *</CLabel>
                  </CCol> */}
                      <CCol xs="12" md="9" lg="12">
                        <CLabel>Choose Payment Method</CLabel>
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
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      {/* <CCol md="3">
                    <CLabel htmlFor="textarea-input">Additional Information</CLabel>
                  </CCol> */}
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
                    <CButton type="submit" size="sm" color="primary">
                      <CIcon name="cil-scrubber" /> Submit
                    </CButton>
                  </CForm>
                </CCardBody>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary">
                    <CIcon name="cil-scrubber" /> Submit
                  </CButton>
                  <CButton type="reset" size="sm" color="danger">
                    <CIcon name="cil-ban" /> Reset
                  </CButton>
                </CCardFooter>
              </CCard>
            </CCol>
          </CRow>
        </div>
        <div className="col-lg-4" lg="6">
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
};

export default BidForm;
