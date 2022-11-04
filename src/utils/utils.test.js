import {selectRandomWod} from "./utils";

describe('selectRandomWod', () => {
    it('should not return any list index when the WODs list is empty', function () {
        const wods = [];
        expect(() => selectRandomWod(wods).toThrow("Empty Database"))
    });

    it('should return an index on the length list range', function () {
        const wods = ["test", "test2"]

        const actualResult = selectRandomWod(wods);

        expect(wods.includes(actualResult)).toBeTruthy();
    });
})