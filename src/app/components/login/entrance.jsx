import React from "react";
import {Link} from "react-router-dom";
import "./login.css"

const Entrance = () => {
    return <>
        <div className="page">
            <div className="login">
                <h2 className="text-center">Enter</h2>
                <div className="col">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Login" aria-label="First name"></input>
                    </div>
                    <div className="col mt-2">
                        <input type="text" className="form-control" placeholder="Password"
                               aria-label="Last name"></input>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3">Enter</button>

                <Link to="/registration" className="nav-link text-center mt-2">Register</Link>
            </div>
        </div>
    </>;
}

export default Entrance;
