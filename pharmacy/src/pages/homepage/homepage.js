import React from "react";

import SectionTop from "./homepage-section-top/homepage-section-top";
import SectionBottom from "./homepage-section-bottom/homepage-section-bottom";

import "./homepage.styles.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <SectionTop />
      <SectionBottom />
    </div>
  );
};

export default Homepage;
