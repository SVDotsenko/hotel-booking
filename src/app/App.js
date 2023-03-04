import React from "react";
import NavBar from "./components/navbar/navBar";
import {Redirect, Route, Switch} from "react-router-dom";
import Entrance from "./components/login/entrance";
import Registration from "./components/login/registration";
import Rooms from "./components/routs/rooms";
import Admin from "./components/admin/admin";

function App() {
    return <>
        <NavBar/>
        <Switch>
            <Redirect exact from="/" to="/admin"/>
            <Route path="/admin" component={Admin}/>
            <Route path="/entrance" component={Entrance}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/rooms/:book/:roomID?" component={Rooms}/>
        </Switch>
    </>;

}

export default App;
