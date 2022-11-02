import React from "react";

export function Wod() {
    const name = "Example 1";
    const mode = "EMOM";
    const description = [
        "6 Plank Toe Taps",
        "4 Candlesticks",
        "2 Knee Tap Push-Ups"
    ]

    return (
        <div>
            <h1>{name}</h1>
            <h3>{mode}</h3>
            <ul>
                {description.map(wod => (<li key={wod.id}>{wod}</li>))}
            </ul>
        </div>
    )
}