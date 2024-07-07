import React from "react";
import { Link } from "react-router-dom";

const FooterDiv = () => {
  return (
    <div className="Ft p-8">
      <div className="footer bg-blue-500 justify-between p-20  grid grid-cols-3 gap-8 text-white border-transparent rounded-xl ">
        <div className="sec1">
          <div className="logodiv">
            <h1 className="logofooter text-[25px] pb-5">
              <strong>Job</strong>Search
            </h1>
          </div>
          <p>
            We always make our seekers and companies find the best jobs and
            employers find the best candidates
          </p>
        </div>
        <div className="sec2 ml-8">
          <h2 className="TopicSec2 text-xl font-medium mb-3">Quick Links</h2>
          <div className="links text-none hover:text-blue-50">
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/FindJobs">Find Jobs</Link>
              </li>
              <li>
                <Link to="/Employer">Post Job/Employer</Link>
              </li>
              <li>
                <Link to="/Signin">Signin</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sec3">
          <h2 className="TopicSec3 text-xl font-medium mb-5">Contact Info</h2>
          <div>
            <p> jobsearch@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterDiv;
