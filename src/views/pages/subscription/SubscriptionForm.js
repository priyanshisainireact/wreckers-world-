import React from 'react'

import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const SubscriptionForm = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
        
            <CCardGroup className="footersubcard">
              <CCard className="p-4">
                <CCardBody className="cardbodypadding">
                  <CForm>
                    <h1 className="subscribeus">SUBSCRIBE TO US</h1>
                    
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                        @
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Email" autoComplete="email" />
                    </CInputGroup>
                    <CButton color="primary" className="px-4 subscribtn">Subscribe</CButton>
                    <p className="text-muted">Don't worry, we don't spam</p>
                  
                  </CForm>
                </CCardBody>
              </CCard>
             
            </CCardGroup>
         
        </CRow>
      </CContainer>
    </div>
  )
}

export default SubscriptionForm;
