import {configureStore} from "@reduxjs/toolkit";
import {workoutSlice} from "../home/workoutSlice";

export const store = configureStore({
    reducer: {
        workout: workoutSlice.reducer
    },
})
