import React from "react";

const VinFetchDetails = () => {
  return (
    <div id="vinDetail">
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="antiBreakSystem"
            name="antiBreakSystem"
            placeholder="Anti Break System"
            disabled
          />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="cityMileage"
            name="cityMileage"
            placeholder="City Mileage"
            disabled
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="driveType"
            name="driveType"
            placeholder="Drive Type"
            disabled
          />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput id="engine" name="engine" placeholder="Engine" disabled />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="fuelType"
            name="fuelType"
            placeholder="Fuel Type"
            disabled
          />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="highwayMileage"
            name="highwayMileage"
            placeholder="Highway Mileage"
            disabled
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput id="madeIn" name="madeIn" placeholder="Made In" disabled />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput id="make" name="make" placeholder="Make" disabled />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput id="model" name="model" placeholder="Model" disabled />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="overallHeight"
            name="overallHeight"
            placeholder="Overall Height"
            disabled
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="overallLength"
            name="overallLength"
            placeholder="Overall Length"
            disabled
          />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="overallWidth"
            name="overallWidth"
            placeholder="Overall Width"
            disabled
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="standardSeating"
            name="standardSeating"
            placeholder="Standard Seating"
            disabled
          />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="steeringSeating"
            name="steeringSeating"
            placeholder="Steering Seating"
            disabled
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput id="style" name="style" placeholder="Style" disabled />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput
            id="transmission"
            name="transmission"
            placeholder="Transmission"
            disabled
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput id="trim" name="trim" placeholder="Trim" disabled />
        </CCol>
        <CCol xs="12" md="6" lg="6">
          <CInput id="type" name="type" placeholder="Type" disabled />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol xs="12" md="6" lg="6">
          <CInput id="year" name="year" placeholder="Year" disabled />
        </CCol>
      </CFormGroup>
    </div>
  );
};
export default VinFetchDetails;
