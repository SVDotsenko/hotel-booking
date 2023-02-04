import React from "react";
import "./login.css"
import {Link} from "react-router-dom";

const Entrance = () => {
    return <>
        <div className="page">
            <div className="login">
                <h2 className="text-center">Вход</h2>
                <div className="col">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Логин" aria-label="First name"></input>
                    </div>
                    <div className="col mt-2">
                        <input type="text" className="form-control" placeholder="Пароль" aria-label="Last name"></input>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3">Войти</button>

                <Link to="/registration" className="nav-link text-center mt-2">Зарегистрироваться</Link>
            </div>
        </div>
    </>;
}

export default Entrance;
