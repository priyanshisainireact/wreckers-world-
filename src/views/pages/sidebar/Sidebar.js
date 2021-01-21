import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { yardDetail } from "../yardlisting/yardDetail";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar title">Yard Listing</h3>
      {yardDetail.map((yard) => {
        return (
          <li className="sidebarlist" key={yard.id}>
            {yard.Name}
          </li>
        );
      })}
    </div>
  );
};

export default Sidebar;
