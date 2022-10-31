import React, {useState} from "react";
import "./WodMode.css";
import {Card} from "./Card";

export function WodMode() {

    const wodModes = ["AMRAP", "RFT", "EMOM", "TABATA"]
    const [currentMode, setCurrentMode] = useState("")

    const getWodMode = (event) => {
        const currentMode = event.currentTarget.textContent;
        alert(currentMode);
        setCurrentMode(currentMode);
    }

    return (
        <div className="wod-mode container-fluid">
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
                <button type="button" className="btn btn-success btn-lg w-50 p-3" id="start-button">START</button>
            </div>
        </div>
    )
}
