import React from "react";

import { CCol, CFormGroup, CLabel, CInput } from "@coreui/react";
class BlogDetail extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <h2 className="news-heading">Blog Detail</h2>
        </div>
        <div className="row cardetailcard">
          <div className="col-lg-7">
            <div className="image-cardetail">
              <img
                src={"./avatars/bidcar.jpg"}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cardetaillist">
              <h2 className="blogHeading">
                {" "}
                Lorem Ipsum is simply dummy text of the printing{" "}
              </h2>
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
          <button type="button" className="approve">
            Publish
          </button>
        </div>
      </>
    );
  }
}

export default BlogDetail;
