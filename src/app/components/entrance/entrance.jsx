import React from "react";
import "./entrance.css"
// https://getbootstrap.com/docs/5.1/forms/layout/
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
                <p className="text-center mt-2">Зарегистрироваться</p>
            </div>
        </div>
    </>;
}

export default Entrance;
