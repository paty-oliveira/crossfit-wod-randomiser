import reducer, {setWorkoutMode} from "./workoutSlice";

describe('workoutSlice reducer', () => {
        it('should return default state', function () {
            const currentState = reducer(undefined, {});
            const expectedState = {
                mode: ""
            };

            expect(currentState).toEqual(expectedState)
        });

        it('should update the workout mode when the user clicks on Cards', function () {
            const initialState = {
                mode: ""
            };

            const userChoice = "AMARAP";

            const expectedState = {
                mode: "AMARAP"
            };

            const actualState = reducer(initialState, setWorkoutMode(userChoice));

            expect(actualState).toEqual(expectedState);
        });
    }
);