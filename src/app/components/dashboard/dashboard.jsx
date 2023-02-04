import React from "react";
import "./dashboard.css"
import Room from "../room/room";

const Dashboard = rooms => {
    return <>
        <h2 className="mt-1">Доступные номера</h2>
        <div className="dashboard">
            <div className="rooms-container mt-3">
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
                <Room/>
            </div>
        </div>
    </>;
}

export default Dashboard;
