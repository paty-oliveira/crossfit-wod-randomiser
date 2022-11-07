export const selectRandomWod = (workouts) => {
    if (!workouts.isEmpty) {
        return workouts[Math.floor(Math.random() * (workouts.length))];
    } else {
        throw new Error("Empty Database");
    }
}

export const filterWod = (workouts, wodMode) => {
    return workouts.workouts.filter(
        wod => {
            return wod.mode === wodMode
        });
}
