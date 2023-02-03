import React from "react";
import NavBar from "./components/navBar";
import {Route, Switch} from "react-router-dom";
import Entrance from "./components/entrance/entrance";
import Registration from "./components/registration";

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
