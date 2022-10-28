import React from "react";
import "./WodMode.css";
import {WodCard} from "./WodCard";

export function WodMode() {

    const wodModes = ["AMRAP", "RFT", "EMOM", "TABATA"]

    return (
        <div className="wod-mode container-fluid">
            <div className="row row-cols-2 gy-5 w-50">
                {
                    wodModes.map(
                        mode => <WodCard mode={mode}/>
                    )
                }
            </div>
        </div>
    )
}
