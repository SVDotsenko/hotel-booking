import React, {useEffect, useState} from "react";
import "./details.css"
import api from "../../../api";

const Details = ({roomID}) => {
    const [room, setRoom] = useState();

    useEffect(() => {
        api.rooms.getById(roomID).then(data => setRoom(data));
    }, [roomID]);

    const handleBookRoom = () => {
        api.rooms.bookRoom(roomID).then(data => setRoom(data));
    };

    const buttonName = room?.booked ? "Cansel reservation" : "Book";

    return room ? <>
        <h2>Information about room</h2>
        <div className="room-container">
            <div className="room">
                <div className="picture">foto</div>
                <div>
                    <div className="room-info">{room?.name}</div>
                    <div className="book">
                        <button
                            type="button"
                            className="btn btn-lg btn-outline-primary"
                            onClick={handleBookRoom}
                        >{buttonName}</button>
                    </div>
                </div>
            </div>
        </div>
    </> : <h1>loading room details...</h1>;
}

export default Details;
