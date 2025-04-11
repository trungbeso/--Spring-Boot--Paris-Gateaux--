import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={`border-end bg-white ${sidebarOpen ? "" : "d-none"}`}
      id="sidebar-wrapper"
    >
      <div className="sidebar-heading border-bottom bg-light">
        <img
          src={assets.logo}
          alt="logo"
          className="img-fluid me-2"
          style={{ width: "50px", height: "50px" }}
        />
        Paris Gâteaux
      </div>
      <div className="list-group list-group-flush">
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/add"
        >
          <i className="bi bi-plus-circle me-2"></i>
          Add Food
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/list"
        >
          <i className="bi bi-list-ul me-2"></i>
          list Food
        </Link>
        <Link
          className="list-group-item list-group-item-action list-group-item-light p-3"
          to="/orders"
        >
          <i className="bi bi-cart me-2"></i>
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
