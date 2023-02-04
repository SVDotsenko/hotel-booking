import React from "react";
import "./login.css"

const Registration = () => {
    return <>
        <div className="page">
            <div className="login">
                <h2 className="text-center">Регистрация</h2>
                <div className="col">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Логин" aria-label="First name"></input>
                    </div>
                    <div className="col mt-2">
                        <input type="text" className="form-control" placeholder="Пароль" aria-label="Last name"></input>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3">Регистрация</button>


            </div>
        </div>
    </>;
}

export default Registration;
