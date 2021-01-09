import React from 'react'
import './bidding.css';
import Sidebar from '../sidebar/Sidebar'
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
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const BidForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
   <div className="container">
     <div className="row">
       <div className="col-lg-8">
       <CRow> 
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            <h2 class="form-news-heading">List Your Car</h2>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  {/* <CCol md="3">
                    <CLabel htmlFor="text-input">Car details  *</CLabel>
                  </CCol> */}
                  <CCol xs="12" md="9" lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter Make, Model, Year of Manufacture" />
               
                  </CCol>
                  <CCol xs="12" md="9"lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter Name" />
               
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
                  <CCol xs="12" md="9"lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter Phone Number" />
               
                  </CCol>
                  <CCol xs="12" md="9"lg="6">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
  
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
                  <CCol xs="12" md="9"lg="6">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select your country</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="9"lg="6">
                    <CSelect custom name="select" id="select">
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
                  <CCol xs="12" md="9"lg="6">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select your city</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="12" md="9"lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter VIN Number " />
               
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
                  <CCol xs="12" md="9"lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter Opening Price " />
               
                  </CCol>
                  <CCol xs="12" md="9"lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter Lowest Price to Accept " />
               
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
                  <CCol xs="12" md="9"lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter Incremental Value" />
               
                  </CCol>
                  <CCol xs="12" md="9"lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter Ending Date" />
               
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
                  <CCol xs="12" md="9"lg="6">
                    <CInput id="text-input" name="text-input" placeholder="Enter Services provided by the business" />
               
                  </CCol>
                  <CCol xs="12" md="9"lg="6">
                    <CInputFile 
                      id="file-multiple-input" 
                      name="file-multiple-input" 
                      multiple
                      custom
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
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
                  <CCol xs="12" md="9"lg="12">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select your Payment Method</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  {/* <CCol md="3">
                    <CLabel htmlFor="textarea-input">Additional Information</CLabel>
                  </CCol> */}
                  <CCol xs="12" md="9"lg="12">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="9"
                      placeholder="Additional Information" 
                    />
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
       
      </CRow>
   
    
       </div>
       <div className="col-lg-4"lg="6">
       <Sidebar/>
         <Sidebar/>
         <img src={'./avatars/Banner.png'} style={{height:'auto',width:'60%'}} />
       </div>
     </div>
   </div>
     
     
  )
}

export default BidForm;