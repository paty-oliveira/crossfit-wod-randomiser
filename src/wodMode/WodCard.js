import React from "react";

export function WodCard(props) {

    const wodMode = props.mode;

    return (
        <div className="col">
            <div className="card p-5 mode-card ">
                <div className="card-body">{wodMode}</div>
            </div>
        </div>
    )
}