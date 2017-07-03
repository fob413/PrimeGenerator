const assert = require("chai").assert;
const myApp = require("../src/main.js");

describe("PrimeGenerator", function(){

	describe("handle valid input", function(){

		it("should return [2,3,5] as a result for getprime(5)", function(){

			assert.deepEqual(myApp.getPrime(5), [2,3,5]);

		});

	});

});