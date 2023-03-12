import React, {useEffect, useState} from "react";
import "./admin.css";
import api from "../../api";
import Spinner from "../spinner";

const Admin = () => {
    const [rooms, setRooms] = useState();

    useEffect(() => {
        api.rooms.fetchAll().then(data => setRooms(data));
    }, [rooms]);

    const getRoomStyle = ({booked}) => {
        return `square ${booked ? "booked" : "available"}`
    }

    const handleClick = ({roomNumber}) => {
        api.rooms.bookRoom(roomNumber);
    }

    return rooms ? <>
        <h1 className="text-center mt-5">Rooms status</h1>
        <div className="container">
            <div className="inner-container"
                 data-toggle="tooltip"
                 title="click the room to change booking status">
                {rooms?.map(room =>
                    <div key={room._id}
                         className={getRoomStyle(room)}
                         data-toggle="tooltip"
                         title={room.name}
                         onClick={() => handleClick(room)}
                    >
                        {room.roomNumber}
                    </div>
                )}
            </div>
        </div>
    </> : <Spinner/>;
}

export default Admin;