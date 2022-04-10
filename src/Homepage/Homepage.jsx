import React from "react";
import Secondsection from "./SecondSection/Secondsection";
import Biosection from "./Biosection/Biosection";
import Faq from "./Biosection/Faq";

function Homepage() {
  return (
    <div className="homepage">
      <Secondsection />
      <Biosection />
      <Faq />
    </div>
  );
}

export default Homepage;
