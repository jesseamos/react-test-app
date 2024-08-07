import React from 'react';
import ReactDOM from "react-dom/client"
import Passenger from './Passenger';
import "./style.css"


function MyForm () {
  return (
    <>
    <h3>Enter your First Name:</h3>
    <input type='text'/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm/>);
