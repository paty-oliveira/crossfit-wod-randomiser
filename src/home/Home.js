import React from "react";
import "./Home.css";
import {Card} from "./Card";

export function Home() {

    const wodModes = ["AMRAP", "RFT", "EMOM", "TABATA"]
    // const [currentMode, setCurrentMode] = useState("")

    const getWodMode = (event) => {
        const currentMode = event.currentTarget.textContent;
        alert(currentMode);
        // setCurrentMode(currentMode);
    }

    return (
        <div className="wod-mode container-fluid">
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
                <button type="button" className="btn btn-success btn-lg w-50 p-3" id="start-button">START</button>
            </div>
        </div>
    )
}
