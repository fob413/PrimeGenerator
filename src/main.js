
	/**
	* Returns an array of prime numbers
	*
	* @param {n} , must be a positive integer greater than 1
	*
	* @return {array} array of prime numbers up to n
	*
	**/
	const getPrime = n => {

		if(n < 2){

			console.log('Your value should be a positive integer greater than 1');

		}else{

			let primeNumbers = [];

			for(let i = 2; i <= n; i++ ){
				
				if (isPrime(i)){

					primeNumbers.push(i);

				}

			}

			return primeNumbers;
			

		}
	}

	/**
	* Returns true or false if the number given is prime
	*
	* @param {m} , integer to be checked
	*
	* @return {Boolean}
	*
	**/
	const isPrime = m => {

		let prime = true;

		for(let i = 2; i < m; i++){

			if(m % i == 0){

				prime = false;

			}

		}

		return prime;
	}



module.exports = {
	getPrime: getPrime,
	isPrime: isPrime
}
getPrime(5);