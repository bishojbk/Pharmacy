import React from "react";

import "./homepage-section-top.styles.scss";

const SectionTop = () => {
  return (
    <div>
      <div className="homepage-section container-fluid">
        <div className="row">
          <div className="col-lg-6 homepage-section_left">
            <div className="container">
              <p>Medico</p>

              <div className="homepage-section_left_info">
                <h4 className="col-lg-3">Health Care</h4>
                <h1>
                  Treatment <br /> with the best <br />
                  <span>Doctors.</span>
                </h1>
                <p className="mt-4">Take yourselves and your families care.</p>
                <div className="link mt-5">
                  <a href="https://www.facebook.com">Book an Appointment.</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 homepage-section_right">
            <div className="homepage-section_right_header d-flex justify-content-around">
              <p className="m">
                Emergency Call: <span className="m-2"> 9898989898 </span>
              </p>
              <button type="button" class="btn btn-primary">
                Get a Quote {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTop;
