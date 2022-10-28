import React from "react";
import "./WodMode.css";

export function WodMode() {
    return (
        <div className="wod-mode container-fluid">
            <div className="row row-cols-2 gy-5 w-50">
                <div className="col">
                    <div className="card p-5 mode-card ">
                        <div className="card-body">AMRAP</div>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-5 mode-card">
                        <div className="card-body">RFT</div>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-5 mode-card">
                        <div className="card-body">EMOM</div>
                    </div>
                </div>
                <div className="col">
                    <div className="card p-5 mode-card">
                        <div className="card-body">TABATA</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
