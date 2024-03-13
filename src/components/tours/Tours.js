import React from "react";
import data from "../../data/db.json";
import Tour from "./tour/Tour";
import "./Tours.css";
function Tourscomp() {
  return (
    <div className="tour-wrapper">
      {data.map((tour) => {
        return <Tour tour={tour} />;
      })}
    </div>
  );
}
export default Tourscomp;
