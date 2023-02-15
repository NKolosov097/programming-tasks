describe("thetaFormula(radius, arc, angle)", function() {
    it ("should pass a variety of sample tests", function(){
    	Test.assertEquals(thetaFormula( 3, 1), null)
    	Test.assertEquals(thetaFormula( "?", "?", "?"), null)
    	Test.assertEquals(thetaFormula( 26, "?", 4), 104)
		  Test.assertEquals(thetaFormula( 8, "?", 7), 56)
		  Test.assertEquals(thetaFormula( -4, 4, -4), false)
	  	Test.assertEquals(thetaFormula( 1, 10, 10), true)
    });
});