import React from "react";
import "./Wod.css";
import {Timer} from "./timer/Timer";
import {useSelector} from "react-redux";
import {selectWorkoutName, selectWorkoutMode} from "../home/workoutSlice";

export function Wod() {

    const name = useSelector(selectWorkoutName);
    const mode = useSelector(selectWorkoutMode);
    const description = [
        "6 Plank Toe Taps",
        "4 Candlesticks",
        "2 Knee Tap Push-Ups"
    ]

    return (
        <div className="container-fluid">
            <h1 className="card-title" id="wod-title">{name}</h1>
            <div className="card wod">
                <div className="card-body">
                    <h2 className="card-subtitle" id="wod-mode">{mode}</h2>
                    <ul id="wod-exercises">
                        {description.map(wod => (<p>{wod}</p>))}
                    </ul>
                </div>
            </div>
            <Timer />
        </div>
    )
}
