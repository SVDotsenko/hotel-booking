import React from "react";
import NavBar from "./components/navbar/navBar";
import {Route, Switch} from "react-router-dom";
import Entrance from "./components/login/entrance";
import Registration from "./components/login/registration";
import Rooms from "./components/routs/rooms";
import Admin from "./components/admin/admin";

function App() {
    return <>
        <NavBar/>
        <Switch>
            <Route path="/admin" component={Admin}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/rooms/:book/:roomID?" component={Rooms}/>
            <Route path="/" component={Entrance}/>
        </Switch>
    </>;

}

export default App;
