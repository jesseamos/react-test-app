import React from "react"
import Driver from "./Driver"

function Passenger () {
    let carBrand = "BENZ"
    return <>
    <h1>Hey i'm a Passenger and this is my driver check him out</h1>
    <Driver color= {"red"} isLearner={false} yearOfDrivingExperience={30} carBrand={carBrand}/>
    </>
}

export default Passenger