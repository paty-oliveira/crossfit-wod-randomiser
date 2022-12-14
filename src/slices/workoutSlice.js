import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: "",
    wodInfo: {}
};

const options = {
    name: "workout",
    initialState,
    reducers: {
        setWorkoutMode: (state, action) => {
            state.mode = action.payload;
        },

        setWod: (state, action) => {
            state.wodInfo = action.payload;
        },

        cleanWorkoutState: (state, action) => {
            return initialState;
        }
    }
};

export const workoutSlice = createSlice(options);

export const selectWorkoutMode = (state) => state.workout.mode;

export const selectWorkoutName = (state) => state.workout.wodInfo.name;

export const selectWorkoutExercise = (state) => state.workout.wodInfo.exercises;

export const selectWorkoutTime = (state) => state.workout.wodInfo.wodTime;

export const selectWorkoutRoundsNumber = (state) => state.workout.wodInfo.numberRounds;

export const { setWorkoutMode, setWod, cleanWorkoutState } = workoutSlice.actions;

export default workoutSlice.reducer;

