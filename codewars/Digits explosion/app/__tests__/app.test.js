const assert = require('chai').assert;
describe("Basic tests", () => {
  const tests = [
    ["", ""],
    ["0", ""],
    ["1", "1"],
    ["2", "22"],
    ["3", "333"],
    ["4", "4444"],
    ["5", "55555"],
    ["6", "666666"],
    ["7", "7777777"],
    ["8", "88888888"],
    ["9", "999999999"],
    ["000", ""],
    ["312", "333122"],
    ["102269","12222666666999999999"],
    ["09876543456781203745372900871624437492009817162443739030973653", "99999999988888888777777766666655555444433344445555566666677777778888888812233377777774444555553337777777229999999998888888877777771666666224444444433377777774444999999999229999999998888888817777777166666622444444443337777777333999999999333999999999777777733366666655555333"]
  ];
  for(const [input, expected] of tests)
    it(JSON.stringify(input), () => assert.strictEqual(explode(input), expected));
});
describe("Random tests", () => {
  const generateStr = _ => {
    let digits = '0123456789', n = Math.floor(Math.random() * 30), s = '';
    for(let i = 0; i < n; i++) s += digits[Math.floor(Math.random() * digits.length)];
    return s;
  };
    
  const sol = s => {
    let arr = s.split(''), str = '';
    for(let i = 0; i < arr.length; i++) str += arr[i].repeat(+arr[i]);
    return str;
  };
  
  it("should work for random inputs", () => {
    for(let i = 0; i < 100; i++) {
      let t = generateStr();
      assert.strictEqual(explode(t), sol(t), `Input: ${JSON.stringify(t)}`);
    }
  });
});