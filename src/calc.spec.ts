import { return1337 } from "./calc.js";

describe("Main", () => {
  it("should return 0", () => {
    expect(return1337()).toEqual(1337);
  });
});
