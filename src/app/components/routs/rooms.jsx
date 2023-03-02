import React from "react";
import {useParams} from "react-router-dom";
import Details from "../room/details/details";
import Dashboard from "../dashboard/dashboard";

const Rooms = () => {
    const params = useParams();
    const {roomID} = params;
    return roomID ? <Details roomID={roomID}/> : <Dashboard/>;
}

export default Rooms;