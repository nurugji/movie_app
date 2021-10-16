import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/About">ABOUT</Link>
    </div>
  );
}

export default Navigation;
