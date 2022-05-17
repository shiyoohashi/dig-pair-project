const { expect } = require("chai");
const Cook = require("../index");

describe("random data", () => {
  it("should have a function", () => {
    const cooking = new Cook();
    expect(typeof cooking.random).to.equal("function");
  });

  it("should have a function return type string", () => {
    const cooking = new Cook();
    expect(typeof cooking.random()).to.equal("string");
  });
});
