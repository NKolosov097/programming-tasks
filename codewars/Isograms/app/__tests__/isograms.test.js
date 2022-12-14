const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("moose"), false );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("thumbscrewjapingly"), true );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  })

  let lowers = "abcdefghijklmnopqrstuvwxyz", uppers = lowers.toUpperCase();
  const rnd = function(x){return ~~(Math.random()*x)}
  const rndChr = function(str){ return str[rnd(str.length)] };
    
  it("More tests", () => {    
    assert.strictEqual(isIsogram(lowers), true)
    assert.strictEqual(isIsogram(uppers), true)
  })
  
  it("More Mixed tests", () => {
    assert.strictEqual(isIsogram(lowers+rndChr(lowers)), false)
    assert.strictEqual(isIsogram(lowers+rndChr(uppers)), false)
  })
     
  const shuffle = function(str){return str.split('').sort(function(){return Math.random() - 0.5}).join('')}
  
  it("Random tests", () => {
    for(let t=0; t<100; t++){
      let cc = shuffle(lowers), exp = true, chr;
      let len = lowers.length; 
      len = Math.min(3+rnd(len),len);
      let str = cc.slice(0,len);
      if( rnd(99)<50 ){
        chr = rndChr(str);
        if( rnd(99)<50 )
          chr=chr.toUpperCase();        
        str = shuffle(shuffle(str+chr));
        exp = false
      }
      assert.strictEqual(isIsogram(str),exp,!exp? " 2 '"+chr+"' in "+str+" !":"")
    }
  })
})