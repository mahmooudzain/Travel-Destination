import React from "react";
import data from "../../data/db.json";
import Tour from "./tour/Tour";
import { Link } from "react-router-dom";

import "./Tours.css";
function Tourscomp() {
  return (
    <div className="tour-wrapper">
      {data.map((tour) => {
        return (
          <Link to={`/city/${tour.id}`}>
            <Tour tour={tour} />
          </Link>
        );
      })}
    </div>
  );
}
export default Tourscomp;
