import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/db.json";

function TourDetails() {
  let params = useParams();

  return (
    <div>
      {data
        .filter((tour) => {
          return tour.id === params.id;
        })
        .map((filteredTour) => {
          return (
            <div className="tour-div">
              <h1>{filteredTour.name}</h1>

              <img
                style={{ height: 250, width: 500 }}
                src={filteredTour.image}
                alt={filteredTour.name}
              />
              <h3>{filteredTour.info}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default TourDetails;
