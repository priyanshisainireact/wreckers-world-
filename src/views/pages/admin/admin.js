import React from "react";
import SideNav from "../admin/sideNav/sideNav";
import "./admin.css";
import ManageCar from "./managecar/manageCar";
import ManageYard from "./manageyard/manageYard";
import BlogForm from "../blog/BlogForm";
import BlogDetail from "../blog/blogDetail";
import BlogList from "../blog/blogList";
import AdminEventForms from "./event/eventForm";
import EventList from "./event/eventList";
import EventDetail from "./event/eventDetail";
const Admin = () => {
  const [component, setComponent] = React.useState("manageCar");
  const showData = (value) => {
    setComponent(value);
  };
  return (
    <div className="container">
      <div className="row">
        <div class="col-lg-4">
          <SideNav showData={showData} />
        </div>
        <div class="col-lg-8 zoom">
          {component === "manageCar" ? (
            <ManageCar />
          ) : component === "manageYard" ? (
            <ManageYard />
          ) : component === "blog" ? (
            <>
              <BlogForm />
              <BlogList />
              <BlogDetail />
            </>
          ) : component === "event" ? (
            <>
              <AdminEventForms />
              <EventList />
              <EventDetail />
            </>
          ) : (
            <div>hello</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
