import React from "react";
import Header from "../header/Header";
import Footcomp from "../footer/Footer";
import Tourscomp from "../tours/Tours";
import "./Home.css";
import { BrowserRouter } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
function Home() {
  return (
    <div className="home-wrapper">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      {/* <Routes>
        <Route path="./">Home</Route>
        <Route></Route>
      </Routes> */}
      <Tourscomp />
      <Footcomp />
    </div>
  );
}
export default Home;
