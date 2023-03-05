import React from "react";
import {Link} from "react-router-dom";
import "./navBar.css"
import packageJson from "../../../../package.json"

const NavBar = () => {
    return (
        <ul className="nav nav-bar">
            <li className="nav-item">
                {packageJson.version}
            </li>
            <div className="d-flex">
                <li className="nav-item">
                    <Link to="/admin" className="nav-link">Admin dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/rooms/available" className="nav-link">Available rooms</Link>
                </li>
                <li className="nav-item">
                    <Link to="/rooms/booked" className="nav-link">Booked rooms</Link>
                </li>
                <li className="nav-item">
                    <Link to="/entrance" className="nav-link">Entrance</Link>
                </li>
                <li className="nav-item">
                    <Link to="/registration" className="nav-link">Registration</Link>
                </li>
            </div>
        </ul>
    );
};

export default NavBar;
