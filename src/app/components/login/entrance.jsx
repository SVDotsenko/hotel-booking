import React from "react";
import {Link, useHistory} from "react-router-dom";
import "./login.css"

const Entrance = () => {

    const history = useHistory();
    const handleEnter = () => {
        history.push(`/admin`);
    }

    return <div className="page">
        <div className="login">
            <h2 className="text-center">Enter</h2>
            <div className="col">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Login" aria-label="First name" disabled>
                    </input>
                </div>
                <div className="col mt-2">
                    <input type="text" className="form-control" placeholder="Password" aria-label="Last name" disabled>
                    </input>
                </div>
            </div>

            <button
                type="submit"
                className="btn btn-primary w-100 mt-3"
                onClick={handleEnter}
            >
                Enter as a guest
            </button>

            <Link to="/registration" className="nav-link text-center mt-2">Register</Link>
        </div>
    </div>;
}

export default Entrance;
