import React from "react";
import "./login.css"

const Registration = () => {
    return <>
        <div className="page">
            <div className="login">
                <h2 className="text-center">Registration</h2>
                <div className="col">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="login" aria-label="First name"
                               disabled>
                        </input>
                    </div>
                    <div className="col mt-2">
                        <input type="text" className="form-control" placeholder="password" aria-label="Last name"
                               disabled>
                        </input>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3" disabled>Registration</button>


            </div>
        </div>
    </>;
}

export default Registration;
