import React from "react";
import "./Buttons.css";
import {useNavigate} from "react-router-dom";

export function Buttons(props) {

    const isActive = props.isActive;
    const startOrPauseTimer = props.handleStartOrPauseButton;
    const stopTimer = props.handleStopTimer;
    const navigator = useNavigate();

    const handleClickShuffleButton = () => {
        navigator("../crossfit-wod-randomiser");
    }

    return (
        <div className="buttons">
            <div className="col-5  mx-auto">
                <div className="d-flex align-items-center justify-content-evenly timer-button-container">
                    <button onClick={startOrPauseTimer} type="button" className="btn btn-primary timer-button">
                        {isActive ? "Pause" : "Start"}
                    </button>
                    <button onClick={stopTimer} type="button" className="btn btn-danger timer-button">Reset</button>
                    <button onClick={handleClickShuffleButton} type="button" className="btn btn-success timer-button">Shuffle</button>
                </div>
            </div>
        </div>
    )
}
