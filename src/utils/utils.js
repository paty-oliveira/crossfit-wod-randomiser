export const selectRandomWod = (wods) => {
    if (!wods.isEmpty) {
        return wods[Math.floor(Math.random() * wods.length)];
    } else {
        throw new Error("Empty Database")
    }
}
