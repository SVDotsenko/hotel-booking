import React from "react";
import NavBar from "./components/navbar/navBar";
import {Redirect, Route, Switch} from "react-router-dom";
import Entrance from "./components/login/entrance";
import Registration from "./components/login/registration";
import Rooms from "./components/routs/rooms";

function App() {
    return <>
        <NavBar/>
        <Switch>
            <Redirect exact from="/" to="rooms"/>
            <Route path="/entrance" component={Entrance}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/rooms/:roomID?" component={Rooms}/>
        </Switch>
    </>;

}

export default App;
