import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { yardDetail } from "../yardlisting/yardDetail";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h3 className="sidebar title">Yard Listing</h3>
        {yardDetail.map((yard) => {
          return (
            <li className="sidebarlist" key={yard.id}>
              {yard.Name}
            </li>
          );
        })}
        <div className="sidebarAdd">
          <div className="row">
            <div className="col-lg-5">
              <img
                src={"./avatars/d34496c03e7123291517890bf1639fc4.svg"}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="col-lg-7">
              <h3 className="sidebarAddTitle">Try the car for 7 days!</h3>
              <p>
                Love it, or return it within 7 days for a full refund, no
                question’s asked
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
