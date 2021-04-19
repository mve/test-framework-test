let Add = require("../src/app");

describe("Add functionality", () => {
    it("Calculates x + y = z", () => {
        expect(Add(10, 5)).toEqual(15);
    });
});
