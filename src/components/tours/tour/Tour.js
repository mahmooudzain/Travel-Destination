import React from "react";

function Tour(props) {
  return (
    <div className="tour-div">
      <h1>{props.tour.name}</h1>

      <img
        style={{ height: 250, width: 500 }}
        src={props.tour.image}
        alt={props.name}
      />
      <div
        style={{
          backgroundColor: "red",
          height: 2,
          width: "100%",
          marginTop: 20,
        }}
      />
    </div>
  );
}
export default Tour;
