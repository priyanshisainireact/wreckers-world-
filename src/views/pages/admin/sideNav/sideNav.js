import React from "react";
import "./sidenav.css";

const SideNav = ({ showData }) => {
  return (
    <div className="sideNav">
      <h2 className="adminDashboard">Admin Dashboard</h2>
      <li className="sideNavList">
        <span onClick={() => showData("manageCar")}>Manage Car</span>
      </li>
      <li className="sideNavList">
        <span onClick={() => showData("manageYard")}>Manage Yard</span>
      </li>
      <li className="sideNavList">
        <span onClick={() => showData("creditPoint")}>Credit Points Plan</span>
      </li>
      <li className="sideNavList">
        <span onClick={() => showData("event")}>Event</span>
      </li>
      <li className="sideNavList">
        <span onClick={() => showData("blog")}>Blog</span>
      </li>
    </div>
  );
};

export default SideNav;
