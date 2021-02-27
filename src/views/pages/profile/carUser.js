import React from "react";
import "./profile.css";
import Sidebar from "../sidebar/Sidebar";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CSelect,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import firebase, { firestore, auth } from "../../../firebase/firebase.utils";

const CarUserForm = () => {
  const initialData = {
    cuFirstName: "",
    cuMiddleName: "",
    cuLastName: "",
    cuEmail: "",
    cuPhone: "",
    cuAddress: "",
    cuCountry: "",
    cuState: "",
    cuCity: "",
    cuZip: "",
  };

  const [cmUserDetail, setcmUserDetail] = React.useState(initialData);
  const [userDeatil, setUserDetail] = React.useState({});
  var user = firebase.auth().currentUser;
  // console.log(user.uid);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setcmUserDetail({ ...cmUserDetail, [name]: value });
  };

  const cuFormSubmit = (e) => {
    e.preventDefault();
    if (user) {
      const sendData = {
        ...cmUserDetail,
        id: new Date().getTime().toString(),
        userID: user.uid,
      };
      setUserDetail(sendData);
      setcmUserDetail(initialData);
    }
  };

  React.useEffect(() => {
    if (userDeatil) {
      const newUser = { ...userDeatil };
      firestore.collection("carUser").add(newUser);
    }
  }, [userDeatil]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <CRow>
            <CCol xs="12" md="12">
              <CCard>
                <CCardHeader>
                  <h2 class="form-news-heading">Car User</h2>
                </CCardHeader>
                <CCardBody>
                  <CForm
                    onSubmit={cuFormSubmit}
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <div className="bidFormCard">
                      <h2 className="formheading">Personal Informatiom</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuFirstName"
                            name="cuFirstName"
                            placeholder="Enter First Name"
                            value={cmUserDetail.cuFirstName}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuMiddleName"
                            name="cuMiddleName"
                            placeholder="Enter Middle Name "
                            value={cmUserDetail.cuMiddleName}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuLastName"
                            name="cuLastName"
                            placeholder="Enter Last Name"
                            value={cmUserDetail.cuLastName}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuEmail"
                            name="cuEmail"
                            placeholder="Enter Email"
                            value={cmUserDetail.cuEmail}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuPhone"
                            name="cuPhone"
                            placeholder="Enter Phone"
                            value={cmUserDetail.cuPhone}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuAddress"
                            name="cuAddress"
                            placeholder="Enter Address"
                            value={cmUserDetail.cuAddress}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                      </CFormGroup>

                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuCountry"
                            name="cuCountry"
                            placeholder="Enter Country"
                            value={cmUserDetail.cuCountry}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuState"
                            name="cuState"
                            placeholder="Enter State"
                            value={cmUserDetail.cuState}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                        {/* <CCol md="3">
                    <CLabel htmlFor="select">Select Country *</CLabel>
                  </CCol> */}
                        {/* <CCol xs="12" md="9" lg="6">
                          <CSelect
                            custom
                            name="country"
                            id="country"
                            // onChange={handleChangeCountry}
                            //  value={userDetail.country}
                          >
                            {/* {countryName.map((country) => {
                            return (
                              <option
                                key={country.countryId}
                                value={country.countryName}
                              >
                                {country.countryName}
                              </option>
                            );
                          })} */}
                        {/* <option value="0">
                              Please select your country
                            </option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="U.S.A.">U.S.A.</option>
                          </CSelect>
                        </CCol> */}

                        {/* <CCol xs="12" md="9" lg="6">
                          <CSelect custom name="state" id="state">
                            <option value="0">Please select your state</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol> */}
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuCity"
                            name="cuCity"
                            placeholder="Enter City"
                            value={cmUserDetail.cuCity}
                            onChange={handleChange}
                            required
                          />
                        </CCol>
                        {/* <CCol md="3">
                    <CLabel htmlFor="select">Select City *</CLabel>
                  </CCol> */}
                        {/* <CCol xs="12" md="9" lg="6">
                          <CSelect custom name="city" id="city">
                            <option value="0">Please select your city</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol> */}
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="cuZip"
                            name="cuZip"
                            placeholder="Enter Zip "
                            onChange={handleChange}
                            value={cmUserDetail.cuZip}
                            required
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
        <div className="col-lg-4">
          <Sidebar />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default CarUserForm;
