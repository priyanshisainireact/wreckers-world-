import React from "react";
import "./blogform.css";
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

const BlogForm = () => {
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
    <CRow>
      <CCol xs="12" md="12">
        <CCard>
          <CCardHeader>
            <h2 class="form-news-heading">Add Blog</h2>
          </CCardHeader>
          <CCardBody>
            <div className="bidFormCard">
              <CForm
                // onSubmit={}
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  {/* <CCol md="3">
                    <CLabel htmlFor="text-input">Name Of Yard *</CLabel>
                  </CCol> */}
                  <CCol xs="12" md="9" lg="12">
                    <CInput id="title" name="title" placeholder="Enter Title" />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol xs="12" md="9" lg="12">
                    <CInputFile custom id="logo" type="file" name="logo" />
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose Logo
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
                    />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary">
                    <CIcon name="cil-scrubber" /> Submit
                  </CButton>
                </CCardFooter>
              </CForm>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default BlogForm;
