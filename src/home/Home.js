import React from "react";
import "./Home.css";
import {Card} from "./card/Card";
import {wods} from "../database/wods";
import {useNavigate} from "react-router-dom";
import {selectRandomWod, filterWod} from "../utils/utils";
import {useSelector, useDispatch} from "react-redux";
import {setWorkoutMode, selectWorkoutMode, setWod} from "./workoutSlice";

export function Home() {

    const workoutMode = ["AMRAP", "RFT", "EMOM", "TABATA"];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentWorkoutMode = useSelector(selectWorkoutMode);

    const getWodMode = (event) => {
        dispatch(setWorkoutMode(event.currentTarget.textContent));
    }

    const handleClickStartButton = () => {
        if (currentWorkoutMode !== "") {
            const filteredWod = filterWod(wods, currentWorkoutMode);
            const selectedWod = selectRandomWod(filteredWod);
            dispatch(setWod(selectedWod));
            navigate("./wod");
        } else {
            alert("You must to choose a WOD mode!")
        }
    }

    return (
        <div className="App container">
            <div className="wod-mode">
                <header className="App-header animate__animated animate__bounce">Are you ready to be challenged?</header>
                <div className="row row-cols-2 gy-5 w-50">
                    {
                        workoutMode.map(
                            mode => <Card
                                mode={mode}
                                getWodMode={getWodMode}/>
                        )
                    }
                </div>
                <div className="row w-100 start-button-div">
                    <button type="button"
                            className="btn btn-success btn-lg w-50 p-3"
                            id="start-button"
                            onClick={handleClickStartButton}>
                        START
                    </button>
                </div>
            </div>
        </div>
    )
}
