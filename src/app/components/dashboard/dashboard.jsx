import React, {useEffect, useState} from "react";
import "./dashboard.css"
import Room from "../room/room";
import api from "../../api";

const Dashboard = () => {
    const [rooms, setRooms] = useState();
    useEffect(() => {
        api.rooms.fetchAll().then((data) => setRooms(data));
    }, []);

    return rooms ? <>
        <h2 className="mt-1">Доступные номера</h2>
        <div className="dashboard">
            <div className="rooms-container mt-3">
                {rooms.map(room =>
                    <Room key={room._id} {...room}/>
                )}
            </div>
        </div>
    </> : <h1>loading...</h1>;
}

export default Dashboard;
