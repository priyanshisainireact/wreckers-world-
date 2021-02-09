import React, { useState } from "react";
import "./forgotpassword.css";
import firebase, { auth } from "../../../firebase/firebase.utils";
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
import ResetPassword from "./ResetPassword";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [isNotify, setIsNotify] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(email);
    setIsNotify(true);
    setTimeout(() => {
      setIsNotify(false);
    }, 5000);
    setEmail("");
  };
  const resetPassword = (email) => {
    var auth = firebase.auth();
    var emailAddress = email;
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1 className="forgotheading">Forgot Password ! </h1>
                    {isNotify && (
                      <p>A verification mail has been send to you.</p>
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>@</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>

                    <CRow>
                      <CCol xs="12">
                        <CButton type="submit" color="primary" className="px-4">
                          Submit
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-login py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Heading</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Forgot;
