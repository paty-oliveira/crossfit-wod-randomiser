import {selectRandomWod, filterWod} from "./utils";

describe('selectRandomWod', () => {
    it('should not return any list index when the WODs list is empty', function () {
        const workouts = [];
        expect(() => selectRandomWod(workouts).toThrow("Empty Database"))
    });

    it('should return an index on the length list range', function () {
        const workouts = ["test", "test2"]

        const actualResult = selectRandomWod(workouts);

        expect(workouts.includes(actualResult)).toBeTruthy();
    });
})

describe('filterWods', () => {
    it('should filter wods based on wod mode', function () {
        const wodMode = "RFT";
        const workouts = {
            "workouts": [
                {
                    "id": "9a6b766f-d5a2-46a1-9715-dee8ef300fca",
                    "name": "Freemium",
                    "mode": "AMRAP",
                    "wodTime": "8 minutes",
                    "exercises": [
                        "8 Free Standing Handstand Push Ups",
                        "12 Single Leg Reverse Burpees",
                        "6 Pull Over Bar"
                    ],
                    "createdAt": 1666632445
                },
                {
                    "id": "c3aea9e8-c510-4892-bed4-2815df07072f",
                    "name": "The Longest Mile",
                    "mode": "RFT",
                    "numberRounds": "4 Rounds For Time",
                    "exercises": [
                        "10 Burpees",
                        "100 meter Run",
                        "10 Air Squats",
                        "100 meter Run",
                        "10 Push-Ups",
                        "100 meter Run",
                        "10 Sit-Ups",
                        "100 meter Run"
                    ],
                    "createdAt": 1666633208
                }
                ]
        };

        const actualResult = filterWod(workouts, wodMode);
        const expectedResult = [{
            "id": "c3aea9e8-c510-4892-bed4-2815df07072f",
            "name": "The Longest Mile",
            "mode": "RFT",
            "numberRounds": "4 Rounds For Time",
            "exercises": [
                "10 Burpees",
                "100 meter Run",
                "10 Air Squats",
                "100 meter Run",
                "10 Push-Ups",
                "100 meter Run",
                "10 Sit-Ups",
                "100 meter Run"
            ],
            "createdAt": 1666633208
        }];

        expect(actualResult).toEqual(expectedResult);
    }
    )
});