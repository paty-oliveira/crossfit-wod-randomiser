import React from "react";
import "./Card.css";

export function Card(props) {

    const wodMode = props.mode;

    return (
        <div className="col">
            <div className="card p-5 workout-card">
                <button onClick={props.getWodMode} className="workout-type">{wodMode}</button>
            </div>
        </div>
    )
}
