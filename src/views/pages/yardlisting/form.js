import React from "react";
import "./yardlist.css";
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

const BasicForms = () => {
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
                  <h2 class="form-news-heading">List Your Yard</h2>
                </CCardHeader>
                <CCardBody>
                  <CForm
                    onSubmit={yardSubmit}
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <div className="bidFormCard">
                      <h2 className="formheading">Yard listing</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="12">
                          <CInput
                            id="yardName"
                            name="yardName"
                            placeholder=" Name of Yard"
                            value={yardDetail.yardName}
                            onChange={inputChange}
                          />
                        </CCol>
                      </CFormGroup>
                    </div>

                    <div className="bidFormCard">
                      <h2 className="formheading">Owner Details</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="yardName"
                            name="yardName"
                            placeholder="Owners Name"
                            value={yardDetail.yardName}
                            onChange={inputChange}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="yardName"
                            name="yardName"
                            placeholder=" Name of Yard"
                            value={yardDetail.yardName}
                            onChange={inputChange}
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInputFile
                            custom
                            id="logo"
                            type="file"
                            name="logo"
                            onChange={handleLogoChange}
                          />
                          <CLabel
                            htmlFor="custom-file-input"
                            variant="custom-file"
                          >
                            Choose Logo
                          </CLabel>
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="yardName"
                            name="yardName"
                            placeholder="ABN Number"
                            value={yardDetail.yardName}
                            onChange={inputChange}
                          />
                        </CCol>
                      </CFormGroup>
                    </div>
                    <div className="bidFormCard">
                      <h2 className="formheading">Yard Detail</h2>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            value={yardDetail.email}
                            onChange={inputChange}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="yardName"
                            name="yardName"
                            placeholder="Phone Number"
                            value={yardDetail.yardName}
                            onChange={inputChange}
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            type="text"
                            id="address"
                            name="email"
                            placeholder="Location"
                            autoComplete="email"
                            value={yardDetail.email}
                            onChange={inputChange}
                          />
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CSelect custom name="select" id="select">
                            <option value="0">
                              Please select your country
                            </option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                      </CFormGroup>

                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CSelect custom name="select" id="select">
                            <option value="0">Please select your state</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                        <CCol xs="12" md="9" lg="6">
                          <CSelect custom name="select" id="select">
                            <option value="0">Please select your city</option>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                          </CSelect>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CInputFile
                            custom
                            id="logo"
                            type="file"
                            name="logo"
                            onChange={handleLogoChange}
                          />
                          <CLabel
                            htmlFor="custom-file-input"
                            variant="custom-file"
                          >
                            Choose Logo
                          </CLabel>
                        </CCol>

                        <CCol xs="12" md="9" lg="6">
                          <CInput
                            id="websiteUrl"
                            name="websiteUrl"
                            placeholder="Website Link "
                            value={yardDetail.websiteUrl}
                            onChange={inputChange}
                          />
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="6">
                          <CSelect custom name="select" id="select">
                            <option value="0">Services</option>
                            <option value="1">Auto Parts</option>
                            <option value="2">
                              Car Wrecking,Truck Wrecking,Bus Wrecking, Ship
                              Wrecking
                            </option>
                            <option value="3">Used Car Sales</option>
                            <option value="3">Car Fixing & Serving</option>
                            <option value="3">Others</option>
                          </CSelect>
                        </CCol>

                        <CCol xs="12" md="9" lg="6">
                          <CInputFile
                            id="yardImage"
                            name="yardImage"
                            type="file"
                            multiple
                            custom
                            onChange={UploadYardImage}
                          />
                          <CLabel
                            htmlFor="file-multiple-input"
                            variant="custom-file"
                          >
                            Choose Pictures of Yard
                          </CLabel>
                        </CCol>
                      </CFormGroup>
                      <CFormGroup row>
                        <CCol xs="12" md="9" lg="12">
                          <CTextarea
                            name="additionalInfo"
                            id="additionalInfo"
                            rows="9"
                            placeholder="Additional Information"
                            value={yardDetail.additionalInfo}
                            onChange={inputChange}
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
          <img
            src={"./avatars/Banner.png"}
            style={{ height: "auto", width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicForms;
