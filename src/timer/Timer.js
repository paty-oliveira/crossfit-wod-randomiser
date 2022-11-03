import React, {useEffect, useState} from "react";
import "./Timer.css"

export function Timer() {

    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [isActive, setIsActive] = useState(false);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                const secondCounter = counter % 60;
                const minuteCounter = Math.floor(counter / 60);

                const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
                const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

                setSecond(computedSecond);
                setMinute(computedMinute);

                setCounter(counter => counter + 1);
            }, 1000)
        }
        return () => clearInterval(intervalId);
    }, [isActive, counter]);

    const startOrPauseTimer = () => {
        setIsActive(!isActive);
    };

    const stopTimer = () => {
        setIsActive(false);
        setCounter(0);
        setSecond('00');
        setMinute('00');
    };

    return (
        <div className="container-fluid container-timer">
            <div className="time">
                <span className="minute">{minute}</span>
                <span>:</span>
                <span className="second">{second}</span>
            </div>
            <div className="buttons row">
                <div className="col-6 mx-auto">
                    <div className="d-flex align-items-center justify-content-evenly timer-button-container">
                        <button onClick={startOrPauseTimer} type="button" className="btn btn-primary timer-button">
                        {isActive ? "Pause" : "Start"}
                        </button>
                        <button onClick={stopTimer} type="button" className="btn btn-danger timer-button">Reset</button>
                    </div>
                </div>

            </div>
        </div>
    )
}