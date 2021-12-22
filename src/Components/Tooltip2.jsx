import React, { useState } from "react";
import "./Tooltip2.css";

export default function Tooltip2(props) {
  const [active, setActive] = useState("inactive");

  const displayTip = () => {
    setActive("active");
  };

  const hideTip = () => {
    setActive("inactive");
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={props.tooltipType === "hover" ? displayTip : () => {}}
      onMouseLeave={hideTip}
      onFocus={props.tooltipType === "focus" ? displayTip : () => {}}
      onBlur={hideTip}
    >
      {props.children}

      <div className={`${active} tooltip ${props.position}-tooltip`}>
        {props.content}
      </div>
    </div>
  );
}
