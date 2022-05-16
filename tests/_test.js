const expect = chai.expect;

describe("random data", () => {
  it("should have a function", () => {
    const cooking = new Cook();
    expect(typeof cooking.menue).to.equal("function");
  });

  it("should have a function return type object", () => {
    const cooking = new Cook();
    expect(typeof cooking.menue()).to.equal("object");
  });

  it("should have a function return random number", () => {
    const cooking = new Cook();
    const firstData = cooking.random();
    const secondData = cooking.random();
    expect(firstData).to.not.equal(secondData);
  });

  it("should have a function return filter", () => {
    const cooking = new Cook();
    expect(typeof cooking.dataFilter).to.equal("function");
    const actual = cooking.dataFilter([]);
    expect(actual.length).to.equal(0);
  });
});
