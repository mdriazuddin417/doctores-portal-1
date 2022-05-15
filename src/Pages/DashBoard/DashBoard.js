import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard_sideBar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className="text-3xl text-purple-500 font-bold">
          Welcome to your Dashboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="dashboard_sideBar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to={"/dashboard"}>My Appointment</Link>
          </li>
          <li>
            <Link to={"/dashboard/review"}>My Review</Link>
          </li>
          <li>
            <Link to={"/dashboard/history"}>My History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
