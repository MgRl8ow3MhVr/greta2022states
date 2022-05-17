import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="compteurs">compteurs</Link>
      <Link to="selecteurs">selecteurs</Link>
      <Link to="movers">movers</Link>
      <Link to="modale">modale</Link>
      <Link to="converters">converters</Link>
    </div>
  );
};
export default Header;
