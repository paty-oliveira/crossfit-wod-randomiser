import React from "react";
import "./Wod.css";
import {Timer} from "./timer/Timer";
import {useSelector} from "react-redux";
import {selectWorkoutName, selectWorkoutMode, selectWorkoutExercise} from "../home/workoutSlice";

export function Wod() {

    const name = useSelector(selectWorkoutName);
    const mode = useSelector(selectWorkoutMode);
    const description = useSelector(selectWorkoutExercise);
    const time = "8 minutes"

    return (
        <div className="container-fluid">
            <h1 className="card-title" id="wod-title">{name}</h1>
            <div className="card wod">
                <div className="card-body">
                    <h2 className="card-subtitle" id="wod-mode">{mode}</h2>
                    <ul id="wod-exercises">
                        {description.map(wod => (<p>{wod}</p>))}
                    </ul>
                    <p id="wod-time">{time}</p>
                </div>
            </div>
            <Timer />
        </div>
    )
}
