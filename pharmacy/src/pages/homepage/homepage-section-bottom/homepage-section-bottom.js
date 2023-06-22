import React from "react";

import Female from "../../../assets/img/female.jpg";
import Patient from "../../../assets/img/patient.avif";
// import Services from "../../../assets/img/services.avif";

import "./homepage-section-bottom.styles.scss";

const SectionBottom = () => {
  return (
    <div className="homepage-section-bottom container-fluid">
      <div className="row">
        <div className="homepage-section-bottom_left col-lg-6">
          <div className="homepage-section-bottom_left_header container">
            <h2>
              <span>10k+</span> satisfied <br /> customers
            </h2>
            <div className="homepage-section-bottom_left_section d-flex">
              <div className="homepage-section-bottom_left_stackedimages">
                <img src={Female} alt="arrow"></img>
                <img src={Female} alt="arrow"></img>
                <img src={Female} alt="arrow"></img>
                <img src={Female} alt="arrow"></img>
                <img src={Female} alt="arrow"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-section-bottom_right col-lg-6 d-flex">
          <div className="homepage-section-bottom_right_right-1">
            <img src={Patient} alt="patient"></img>
            <p>Get Immediate Help From The Doctors</p>
          </div>
          <div className="homepage-section-bottom_right_right-2">
            <img src={Patient} alt="patient"></img>
            <p>20+ services with the lowest prices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBottom;
