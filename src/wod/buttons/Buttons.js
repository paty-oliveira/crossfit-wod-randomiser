import React from "react";
import "./Buttons.css";

export function Buttons(props) {

    const isActive = props.isActive;
    const startOrPauseTimer = props.handleStartOrPauseButton;
    const stopTimer = props.handleStopTimer;

    return (
        <div className="buttons">
            <div className="col-5  mx-auto">
                <div className="d-flex align-items-center justify-content-evenly timer-button-container">
                    <button onClick={startOrPauseTimer} type="button" className="btn btn-primary timer-button">
                        {isActive ? "Pause" : "Start"}
                    </button>
                    <button onClick={stopTimer} type="button" className="btn btn-danger timer-button">Reset</button>
                    <button type="button" className="btn btn-success timer-button">Shuffle</button>
                </div>
            </div>
        </div>
    )
}
