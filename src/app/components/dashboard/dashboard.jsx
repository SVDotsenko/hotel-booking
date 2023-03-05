import React, {useEffect, useState} from "react";
import "./dashboard.css"
import Room from "../room/room";
import api from "../../api";
import {useParams} from "react-router-dom";

const Dashboard = () => {
    const {book} = useParams();
    const [rooms, setRooms] = useState();

    useEffect(() => {
        setRooms(null);
        if (book === "booked") {
            api.rooms.fetchAll().then((data) => setRooms(data.filter(room => room.booked)));
        } else if (book === "available") {
            api.rooms.fetchAll().then((data) => setRooms(data.filter(room => !room.booked)));
        }
    }, [book]);

    const getPageTitle = () => {
        const booking = book.charAt(0).toUpperCase() + book.slice(1);
        return rooms?.length > 0 ? `${booking} rooms` : `There is no any ${book} rooms`;
    }

    return rooms ? <>
        <h2 className="mt-1">{getPageTitle()} </h2>
        <div className="dashboard">
            <div className="rooms-container mt-1">
                {rooms?.map(room =>
                    <Room key={room._id}
                          {...room}
                          rooms={rooms}
                          setRooms={setRooms}
                    />
                )}
            </div>
        </div>
    </> : <h1>loading...</h1>;
}

export default Dashboard;
