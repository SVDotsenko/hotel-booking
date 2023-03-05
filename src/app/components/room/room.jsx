import React, {useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import "./room.css"
import api from "../../api";

const Room = ({roomNumber, name, booked, rooms, setRooms}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, roomNumber * 100);

        return () => clearTimeout(timeout);

    }, [show, roomNumber]);

    const history = useHistory();
    const {pathname} = useLocation();
    const handleOpenRoom = () => {
        history.push(`${pathname}/${roomNumber}`);
    }

    const handleCancelReservation = () => {
        api.rooms.bookRoom(roomNumber).then(setRooms(rooms.filter(room => room.roomNumber != roomNumber)));
    }

    return show ? <div className="rom">
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="modal-header py-3">
                <h4 className="my-0 fw-normal">{roomNumber}</h4>
                {booked && <button type="button"
                                   className="btn-close"
                                   aria-label="Close"
                                   onClick={handleCancelReservation}
                                   data-toggle="tooltip"
                                   title="cancel reservation"></button>
                }
            </div>

            <div className="card-body">
                <div className="d-flex justify-content-center">
                    {name}
                </div>
                <button
                    type="button"
                    className="w-100 btn btn-lg btn-outline-primary mt-3"
                    onClick={handleOpenRoom}
                >Open
                </button>
            </div>
        </div>
    </div> : null;
}

export default Room;
