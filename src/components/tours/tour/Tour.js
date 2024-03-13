import React from "react";

function Tour(props) {
  return (
    <div className="tour-div">
      <h3>{props.tour.name}</h3>
      <img
        style={{ height: 250, width: 500 }}
        src={props.tour.image}
        alt={props.name}
      />
      <h5>{props.tour.info}</h5>
      <div style={{ background: "red", height: 2 }} />
    </div>
  );
}
export default Tour;
