import React from "react";
import "./MyVerticallyCenteredModal.css";

function Timeline(props) {
  return (
    <ul className='timeline'>
      <li>
        <a>Activity</a>
        <a className='float-right'>Time</a>
      </li>
      <li>
        <a href='#'>Start Time</a>
        <a href='#' className='float-right'>
          {props.start}
        </a>
      </li>
      <li>
        <a href='#'>End Time</a>
        <a href='#' className='float-right'>
          {props.end}
        </a>
      </li>
      <hr />
    </ul>
  );
}

export default Timeline;
