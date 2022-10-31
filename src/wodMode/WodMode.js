import React from "react";
import "./WodMode.css";
import {Card} from "./Card";

export function WodMode() {

    const wodModes = ["AMRAP", "RFT", "EMOM", "TABATA"]

    const selectWodMode = (event) => {
        alert(event.currentTarget.textContent);
    }

    return (
        <div className="wod-mode container-fluid">
            <div className="row row-cols-2 gy-5 w-50">
                {
                    wodModes.map(
                        mode => <Card
                                    mode={mode}
                                    selectWodMode={selectWodMode}/>
                    )
                }
            </div>
        </div>
    )
}
