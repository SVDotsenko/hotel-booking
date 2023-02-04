import React from "react";
import NavBar from "./components/navbar/navBar";
import {Route, Switch} from "react-router-dom";
import Entrance from "./components/login/entrance";
import Registration from "./components/login/registration";

function App() {
    return <>
        <NavBar/>
        <Switch>
            <Route path="/entrance" component={Entrance}/>
            <Route path="/registration" component={Registration}/>
        </Switch>
    </>;

}

export default App;
