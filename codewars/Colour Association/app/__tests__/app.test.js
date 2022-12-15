const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [{white:"goodness"},{blue:"tranquility"}]);
    assert.deepEqual(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]), [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);
  });
});