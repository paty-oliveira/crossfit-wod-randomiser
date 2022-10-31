import React from "react";
import "./WodCard.css";

export function WodCard(props) {

    const wodMode = props.mode;

    return (
        <div className="col">
            <div className="card p-5 mode-card">
                <button onClick={props.selectWodMode} className="mode-option">{wodMode}</button>
            </div>
        </div>
    )
}
