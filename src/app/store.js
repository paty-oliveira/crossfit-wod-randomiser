import {configureStore} from "@reduxjs/toolkit";
import {workoutSlice} from "../slices/workoutSlice";

export const store = configureStore({
    reducer: {
        workout: workoutSlice.reducer
    },
})
