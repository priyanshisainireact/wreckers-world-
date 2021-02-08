import React from "react";
import "./StaticPages.css";
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

const Contact = () => {
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
                  <h2 class="form-news-heading">Get In Touch !</h2>
                </CCardHeader>
                <CCardBody>
                  <CForm
                    onSubmit={yardSubmit}
                    encType="multipart/form-data"
                    className="form-horizontal"
                  >
                    <CFormGroup row>
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="yardName"
                          name="yardName"
                          placeholder="Enter Name "
                          value={yardDetail.yardName}
                          onChange={inputChange}
                        />
                      </CCol>
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Enter Phone Number"
                          value={yardDetail.phoneNumber}
                          onChange={inputChange}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter Email"
                          autoComplete="email"
                          value={yardDetail.email}
                          onChange={inputChange}
                        />
                      </CCol>
                      <CCol xs="12" md="9" lg="6">
                        <CInput
                          id="yardName"
                          name="yardName"
                          placeholder="Enter Subject "
                          value={yardDetail.yardName}
                          onChange={inputChange}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol xs="12" md="9" lg="12">
                        <CTextarea
                          name="additionalInfo"
                          id="additionalInfo"
                          rows="9"
                          placeholder="Enter Message"
                          value={yardDetail.additionalInfo}
                          onChange={inputChange}
                        />
                      </CCol>
                    </CFormGroup>
                    <CCardFooter>
                      <CButton type="submit" size="sm" color="primary">
                        <CIcon name="cil-scrubber" /> Submit
                      </CButton>
                    </CCardFooter>
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

export default Contact;
