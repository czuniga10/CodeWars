//Usually when you buy something, you're asked whether your credit card number, 
//phone number or answer to your most secret question is still correct. 
//However, since someone could look over your shoulder, you don't want that shown 
//on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last four 
//characters into '#'.

//My code:

function maskify(cc) {
    var lastFour = cc.slice(-4);
    var hash = '';
    for (var i=cc.length - 5; i>=0; i--){
      hash += '#'; 
  }
    return (hash+lastFour);
  }

  // tests

  describe("maskify", function(){
    it("should work for some examples", function(){
      Test.assertEquals(maskify('4556364607935616'), '############5616');
      Test.assertEquals(maskify('1'), '1');
      Test.assertEquals(maskify('11111'), '#1111');
    });
  });

  // Other solutions:

  function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

  //_____________________

  function maskify(cc) {
    return cc.replace(/.(?=....)/g, '#');
  }

  //_____________________-

  maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);

  //_____________________

  function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
  }
  
  cc = cc.join("");
  return cc
  }

  //___________________

  function maskify(cc) {
    if(cc.length <= 4) return cc;
    for (let i = 0; i <cc.length - 4; ++i)
        cc = cc.replace(cc[i], '#');
    return cc;
}