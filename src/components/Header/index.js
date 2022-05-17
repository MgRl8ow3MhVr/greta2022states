import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="compteurs">compteurs</Link>
      <Link to="selecteurs">selecteurs</Link>
      <Link to="movers">movers</Link>
    </div>
  );
};
export default Header;
