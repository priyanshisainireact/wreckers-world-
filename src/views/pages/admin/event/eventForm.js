import React from "react";
import "./adminevent.css";

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

const AdminEventForms = () => {
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
    <CCard style={{ zoom: "100%" }}>
      <CCardHeader>
        <h2 class="form-news-heading"> Event</h2>
      </CCardHeader>
      <CCardBody>
        <CForm
          onSubmit={yardSubmit}
          encType="multipart/form-data"
          className="form-horizontal"
        >
          <CFormGroup row>
            <CCol xs="12" md="9" lg="12">
              <CInput
                id="yardName"
                name="yardName"
                placeholder="Event Title"
                value={yardDetail.yardName}
                onChange={inputChange}
              />
            </CCol>
          </CFormGroup>

          <CFormGroup row>
            <CCol xs="12" md="9" lg="6">
              <CInput
                id="service"
                name="service"
                placeholder="Address"
                value={yardDetail.service}
                onChange={inputChange}
              />
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
              <CLabel htmlFor="file-multiple-input" variant="custom-file">
                Choose Pictures of Event
              </CLabel>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol xs="12" md="9" lg="6">
              <CInput
                id="service"
                name="service"
                placeholder="Start Date"
                value={yardDetail.service}
                onChange={inputChange}
              />
            </CCol>

            <CCol xs="12" md="9" lg="6">
              <CInput
                id="service"
                name="service"
                placeholder="End Date"
                value={yardDetail.service}
                onChange={inputChange}
              />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol xs="12" md="9" lg="6">
              <CInput
                id="service"
                name="service"
                placeholder="Start Time"
                value={yardDetail.service}
                onChange={inputChange}
              />
            </CCol>

            <CCol xs="12" md="9" lg="6">
              <CInput
                id="service"
                name="service"
                placeholder="End Time"
                value={yardDetail.service}
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
                placeholder="Event Description"
                value={yardDetail.additionalInfo}
                onChange={inputChange}
              />
            </CCol>
            <CButton type="submit" size="sm" color="primary">
              <CIcon name="cil-scrubber" /> Submit
            </CButton>
          </CFormGroup>
        </CForm>
      </CCardBody>
    </CCard>
  );
};

export default AdminEventForms;
