import React from "react";
import "./profile.css";
import Sidebar from "../sidebar/Sidebar";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { DocsLink } from "src/reusable";

const CarUserForm = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);
  const [logoUpload, setLogoUpload] = React.useState([]);
  const [yardImage, setYardImage] = React.useState([]);
  const [yardformsubmit, setYardFormSubmit] = React.useState([]);
  const [yardDetail, setYardDetail] = React.useState({
    yardName: "",
    phoneNumber: "",
    email: "",
    websiteUrl: "",
    service: "",
    additionalInfo: "",
  });
  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setYardDetail({ ...yardDetail, [name]: value });
  };
  const handleLogoChange = (e) => {
    setLogoUpload({ ...logoUpload, ...e.target.files });
  };
  const UploadYardImage = (e) => {
    setYardImage({ ...yardImage, ...e.target.files });
  };
  const yardSubmit = (e) => {
    e.preventDefault();
    setYardFormSubmit({
      ...yardDetail,
      image: { ...yardImage },
      logoImage: { ...logoUpload },
    });
  };
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
                    onSubmit={yardSubmit}
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <div className="bidFormCard">
                      <h2 className="formheading">Personal Informatiom</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="First Name"
                            value={yardDetail.phoneNumber}
                            onChange={inputChange}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="yardName"
                            name="yardName"
                            placeholder="Middle Name "
                            value={yardDetail.yardName}
                            onChange={inputChange}
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Last Name"
                            value={yardDetail.phoneNumber}
                            onChange={inputChange}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="yardName"
                            name="yardName"
                            placeholder="Email"
                            value={yardDetail.yardName}
                            onChange={inputChange}
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Enter Phone Number"
                            value={yardDetail.phoneNumber}
                            onChange={inputChange}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="yardName"
                            name="yardName"
                            placeholder="Address "
                            value={yardDetail.yardName}
                            onChange={inputChange}
                          />
                        </CCol>
                      </CFormGroup>

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
                            <option value="0">
                              Please select your country
                            </option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="U.S.A.">U.S.A.</option>
                          </CSelect>
                        </CCol>

                        <CCol xs="12" md="9" lg="6">
                          <CSelect
                            custom
                            name="state"
                            id="state"
                            //   disabled={!hasState}
                            // onChange={handleChangeState}
                            //   value={userDetail.state}
                          >
                            <option value="0">Please select your state</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        {/* <CCol md="3">
                    <CLabel htmlFor="select">Select City *</CLabel>
                  </CCol> */}
                        <CCol xs="12" md="9" lg="6">
                          <CSelect
                            custom
                            name="city"
                            id="city"
                            //   disabled={!hasCity}
                            //   // onChange={handleChangeCity}
                            //   value={userDetail.city}
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
                            placeholder="Enter Zip "
                            //   onChange={handleChange}
                            //   value={userDetail.vinNumber}
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
