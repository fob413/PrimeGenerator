const assert = require("chai").assert;
const myApp = require("../src/main.js");

describe("PrimeGenerator", function(){

	describe("handle valid input", function(){

		it("should return [2,3,5] as a result for getprime(5)", function(){

			assert.deepEqual(myApp.getPrime(5), [2,3,5]);

		});

		it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] as a result for getprime(5)", function(){

			assert.deepEqual(myApp.getPrime(5), [2,3,5]);

		});

		it("should return [ 2 ] as a result for getprime(2)", function(){

			assert.deepEqual(myApp.getPrime(2), [ 2 ]);

		});

	});

	describe("handle invalid input", function(){

		it("should return undefined as a result for getPrime(0)", function(){

			assert.deepEqual(myApp.getPrime(0), "undefined");

		});

		it("should return undefined as a result for getPrime(1)", function(){

			assert.deepEqual(myApp.getPrime(1), "undefined");

		});

		it("should return undefined as a result for getPrime($)", function(){

			assert.deepEqual(myApp.getPrime($), "undefined");

		});

	});

	describe("handle negative input", function(){

		it("should return undefined as a result for getPrime(-5)", function(){

			assert.deepEqual(myApp.getPrime(-5), "undefined");

		});

	});

	describe("handle string input", function(){

		it("should return undefined as a result for getPrime('five')", function(){

			assert.deepEqual(myApp.getPrime('five'), "undefined");

		});

	});

});