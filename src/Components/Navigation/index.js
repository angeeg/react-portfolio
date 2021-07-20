import React, { useState } from "react";
import "./style.css";

function Navigation(props) {
  // variable goes here
  // return statement
  return (
    <>
      <div className="header">
        <div className="name">
        <h2>
          <a>Angeleena</a>
        </h2>
        </div>
        <div className="nav">
        <ul className='list'>
          <li className="mx-2" onClick={() => props.setPage(props.pages[0])}>
            <p>About Me</p>
          </li>
          <li className="mx-2" onClick={() => props.setPage(props.pages[1])}>
            <p>Portfolio</p>
          </li>
          <li className="mx-2" onClick={() => props.setPage(props.pages[2])}>
            <p>Contact</p>
          </li>
          <li className="mx-2" onClick={() => props.setPage(props.pages[3])}>
            <p>Resume</p>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
