
const {expect} = require("chai")
const Calculator = require("./calculator.js");

// import Calculator from "./calculator.js";
// import {expect} from "chai";

describe("testing calculator", () => {
  it("should return 5", function () {
    const calculator = new Calculator();
    const result=calculator.add(2,3);
    expect(result).to.equal(5);
  });
});
