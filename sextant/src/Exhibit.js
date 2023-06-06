import React from "react";
import "./Exhibit.css";

function Exhibit({ title, children }) {
  return (
    <div className="Exhibit">
      <h2 className="ExhibitHeading" >{title}</h2>
      <div className="ExhibitContent" >{children}</div>
    </div>
  );
}

export default Exhibit;
