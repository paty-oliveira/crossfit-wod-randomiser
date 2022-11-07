import reducer, {setWorkoutMode, setWod} from "./workoutSlice";

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

            const userChoice = "AMARAP";

            const expectedState = {
                mode: "AMARAP",
                wodInfo: {}
            };

            const actualState = reducer(initialState, setWorkoutMode(userChoice));

            expect(actualState).toEqual(expectedState);
        });

        it('should update the wod info when the user clicks on START button', function () {
            const initialState = {
                mode: "AMARAP",
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
                mode: "AMARAP",
                wodInfo: wodInfoPayload
            };

            const actualState = reducer(initialState, setWod(wodInfoPayload));

            expect(actualState).toEqual(expectedState)

        });
    }
);