import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    mode: ""
};

const options = {
    name: "workout",
    initialState,
    reducers: {
        setWorkoutMode: (state, action) => {
            state.mode = action.payload;
        }

    }
};

export const workoutSlice = createSlice(options);

export const { setWorkoutMode} = workoutSlice.actions;

export default workoutSlice.reducer;

