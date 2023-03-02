import React, {useEffect, useState} from "react";
import "./room.css"
import {useHistory} from "react-router-dom";

const Room = ({roomNumber, name}) => {
    const [show, setShow] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true);
        }, roomNumber * 100);

        return () => clearTimeout(timeout);

    }, [show, roomNumber]);

    const handleOpenRoom = () => {
        history.push(`/rooms/${roomNumber}`);
    }

    return show ? <div className="rom">
        <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{roomNumber}</h4>
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
