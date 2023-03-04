import React, {useEffect, useState} from "react";
import "./admin.css";
import api from "../../api";

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
        <div className="caption">
            <h1>room status</h1>
        </div>
        <div className="container">
            <div className="inner-container"
                 data-toggle="tooltip"
                 title="click the room to change booking status">
                {rooms?.map(room =>
                    <div
                        key={room._id}
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
    </> : <h1> Loading rooms...</h1>;
}

export default Admin;