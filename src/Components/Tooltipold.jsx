import React from "react";
// import "./Tooltip.css"

export default function Tooltip({ position, content }) {
  return <div className={`tooltip ${position}-tooltip`}>{content}</div>;
}
