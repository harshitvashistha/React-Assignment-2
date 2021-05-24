import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ length }) => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <h1 className="logo">
          <Link to="/">Champion Website</Link>
        </h1>
        <ul className="navitems">
          <li className="navitem">
            <Link to="/">Home</Link>
          </li>
          <li className="navitem">
            <Link to="/watchlist">
              WatchList : <span style={{ fontWeight: "bold" }}> {length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
