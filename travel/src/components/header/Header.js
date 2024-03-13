import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/city/:id">about the city</Link>
      </nav>
    </>
  );
}

export default Header;
