import React from "react";

function Driver({color,isLearner,yearOfDrivingExperience,carBrand}) {
    return <h2>Hi, I am a Driver! my Car color is {color} {isLearner? "i'm still learning": "I'm an expertise"} i have {yearOfDrivingExperience} of experience and my Car brand is {carBrand}</h2>;
  }

export default Driver
