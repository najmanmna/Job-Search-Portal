import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  // console.log("Rendering Home component");
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="LogoDiv">
        <h1 className="logo">
          <strong>Job</strong>Search
        </h1>
      </div>
      <div className="menu flex gap-8">
        <li className="menulist">
          <Link to="/Home">Home</Link>
        </li>
        <li className="menulist">
          <Link to="/FindJobs">Find Jobs</Link>
        </li>

        <li className="menulist">
          <Link to="/Employer">PostJob/Employer</Link>
        </li>
        <li className="menulist">
          <Link to="/Signin">Signin</Link>
        </li>
        <li className="menulist">
        <Link to="/Register">Register</Link></li>
      </div>
    </div>
  );
};

export default NavBar;
