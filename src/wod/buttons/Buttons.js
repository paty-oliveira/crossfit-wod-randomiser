import React from "react";
import "./Buttons.css";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cleanWorkoutState} from "../../slices/workoutSlice";

export function Buttons(props) {

    const isActive = props.isActive;
    const startOrPauseTimer = props.handleStartOrPauseButton;
    const stopTimer = props.handleStopTimer;
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handleClickShuffleButton = () => {
        dispatch(cleanWorkoutState());
        navigator("../crossfit-wod-randomiser");
    }

    return (
        <div className="buttons">
            <div className="col-5  mx-auto">
                <div className="d-flex align-items-center justify-content-evenly timer-button-container">
                    <button onClick={startOrPauseTimer} type="button" className="btn btn-primary timer-button">
                        {isActive ? "PAUSE" : "START"}
                    </button>
                    <button onClick={stopTimer} type="button" className="btn btn-danger timer-button">RESET</button>
                    <button onClick={handleClickShuffleButton} type="button" className="btn btn-success timer-button">SHUFFLE</button>
                </div>
            </div>
        </div>
    )
}
