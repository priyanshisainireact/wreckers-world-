import React from "react";
import "./bidding.css";
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import { CCol, CFormGroup, CLabel, CInput } from "@coreui/react";
class CarDetail extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 zoom">
            <div className="row">
              <h2 className="news-heading">
                Just Arrived For Wrecking – Bid Now
              </h2>
            </div>
            <div className="row cardetailcard">
              <div className="col-lg-7">
                <div className="image-cardetail">
                  <img
                    src={"./avatars/bidcar.jpg"}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="carimagelist">
                  <div className="imageone">
                    <img
                      src={"./avatars/bidcar.jpg"}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="imageone">
                    <img
                      src={"./avatars/bidcar.jpg"}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="imageone">
                    <img
                      src={"./avatars/bidcar.jpg"}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="imageone">
                    <img
                      src={"./avatars/bidcar.jpg"}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="cardetaillist">
                  <h2 className="detailcarname">Audi A4 2014-2016</h2>
                  <p className="endingin">
                    Ending in: 8 days hours 49 minutes 33 seconds
                  </p>
                  <p className="bidcount">No Bid</p>
                  <p className="bidmessage">
                    Reserve price has not been met by any bid.
                  </p>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Bid Value</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="in $AUD "
                      />
                      <p>(Enter 100.00 or more)</p>
                    </CCol>
                  </CFormGroup>
                  <button type="button" className="bidplace">
                    Place Bid
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
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
  }
}

export default CarDetail;
