import React from "react";
import {Link} from "react-router-dom";
import "./navBar.css"

const NavBar = () => {
    return (
        <ul className="nav nav-bar">
            <li className="nav-item">
                <Link to="/" className="nav-link">Main</Link>
            </li>
            <li className="nav-item">
                <Link to="/entrance" className="nav-link">Вход</Link>
            </li>
            <li className="nav-item">
                <Link to="/registration" className="nav-link">Регистрация</Link>
            </li>
        </ul>
    );
};

export default NavBar;
