import reducer, {setWorkoutMode, setWod, selectWorkoutMode, selectWorkoutName} from "./workoutSlice";

describe('workoutSlice reducer', () => {
        it('should return default state', function () {
            const currentState = reducer(undefined, {});
            const expectedState = {
                mode: "",
                wodInfo: {}
            };

            expect(currentState).toEqual(expectedState)
        });

        it('should update the workout mode when the user clicks on Cards', function () {
            const initialState = {
                mode: "",
                wodInfo: {}
            };

            const userChoice = "AMRAP";

            const expectedState = {
                mode: "AMRAP",
                wodInfo: {}
            };

            const actualState = reducer(initialState, setWorkoutMode(userChoice));

            expect(actualState).toEqual(expectedState);
        });

        it('should update the wod info when the user clicks on START button', function () {
            const initialState = {
                mode: "AMRAP",
                wodInfo: {}
            };

            const wodInfoPayload = {
                "id": "42852023-f3b0-4dac-893c-89dedcf2d6d0",
                "name": "Harris",
                "mode": "AMRAP",
                "wodTime": "20 minutes",
                "exercises": [
                    "5 Wall Walks",
                    "10 Burpee Broad Jumps",
                    "15 Air Squats",
                    "20 Sit-Ups"
                ],
                "createdAt": 1666632700
            };

            const expectedState = {
                mode: "AMRAP",
                wodInfo: {
                    "id": "42852023-f3b0-4dac-893c-89dedcf2d6d0",
                    "name": "Harris",
                    "mode": "AMRAP",
                    "wodTime": "20 minutes",
                    "exercises": [
                        "5 Wall Walks",
                        "10 Burpee Broad Jumps",
                        "15 Air Squats",
                        "20 Sit-Ups"
                    ],
                    "createdAt": 1666632700
                }
            };

            const actualState = reducer(initialState, setWod(wodInfoPayload));

            expect(actualState).toEqual(expectedState)
        });

        it('should select workout mode from state', function () {
            const initialState = {
                workout: {
                    mode: "AMRAP",
                    wodInfo: {}
                }
            };

            const expectedResult = "AMRAP";

            const actualResult = selectWorkoutMode(initialState);

            expect(actualResult).toEqual(expectedResult)

        });

        it('should select workout name from state', function () {
            const initialState = {
                workout: {
                    mode: "AMRAP",
                    wodInfo: {
                        id: "9a6b766f-d5a2-46a1-9715-dee8ef300fca",
                        name: "Freemium",
                        mode: "AMRAP",
                        wodTime: "8 minutes",
                        exercises: ["move 1", "move 2"],
                        createdAt: 1666632445
                    }
                }
            };

            const expectedResult = "Freemium";

            const actualResult = selectWorkoutName(initialState);

            expect(actualResult).toEqual(expectedResult)
        });
    }
);