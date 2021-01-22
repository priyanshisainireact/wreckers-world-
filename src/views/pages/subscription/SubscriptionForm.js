import React from "react";

import { Link } from "react-router-dom";
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
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const SubscriptionForm = () => {
  const [isModal, setIsModal] = React.useState(false);
  const [subscribe, setSubscribe] = React.useState("");
  const [term, setTerm] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (term) {
      setSubscribe(term);
      setIsModal(true);
      setTimeout(() => {
        setIsModal(false);
      }, 5000);
    }

    setTerm("");
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCardGroup className="footersubcard">
            <CCard className="p-4">
              {isModal && (
                <article style={{ display: "flex" }}>
                  <p style={{ color: "#4dbc15" }}>
                    Your Subscription has been received!!
                  </p>
                </article>
              )}
              <CCardBody className="cardbodypadding">
                <CForm onSubmit={handleSubmit}>
                  <h1 className="subscribeus">SUBSCRIBE TO US</h1>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                    />
                  </CInputGroup>
                  <CButton
                    color="primary"
                    type="submit"
                    className="px-4 subscribtn"
                  >
                    Subscribe
                  </CButton>
                  <p className="text-muted">Don't worry, we don't spam</p>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CRow>
      </CContainer>
    </div>
  );
};

export default SubscriptionForm;
