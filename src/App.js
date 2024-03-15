import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footcomp from "./components/footer/Footer";
import TourDetails from "./components/TourDetails/TourDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<TourDetails />} />
      </Routes>

      <Footcomp />
    </BrowserRouter>
  );
}

export default App;
