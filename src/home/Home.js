import React, {useState} from "react";
import "./Home.css";
import {Card} from "./card/Card";
import {wods} from "../database/wods";
import {useNavigate} from "react-router-dom";
import {selectRandomWod} from "../utils/utils";

export function Home() {

    const wodModes = ["AMRAP", "RFT", "EMOM", "TABATA"]
    const [currentMode, setCurrentMode] = useState("")
    // const [currentWod, setCurrentWod] = useState({});
    const navigate = useNavigate();

    const getWodMode = (event) => {
        const currentMode = event.currentTarget.textContent;
        setCurrentMode(currentMode);
    }

    const handleClickStartButton = () => {
        const filteredWods = wods.workouts.filter(wod => {return wod.mode === currentMode});
        const selectedWod = selectRandomWod(filteredWods);
        console.log(selectedWod);
        navigate("./wod");
    }

    return (
        <div className="App container">
            <div className="wod-mode">
                <header className="App-header animate__animated animate__bounce">Are you ready to be challenged?</header>
                <div className="row row-cols-2 gy-5 w-50">
                    {
                        wodModes.map(
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
