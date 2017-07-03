
	/**
	* Returns an array of prime numbers
	*
	* @param {n} , must be a positive integer greater than 1
	*
	* @return {array} array of prime numbers up to n
	*
	**/
	const getPrime = n => {

		//getPrime for numbers alone
		if (typeof(n) == "number"){

			//getPrime for only numbers greater than 1
			if(n < 2){

				return undefined;

			}else{

				let primeNumbers = [];

				for(let i = 2; i <= n; i++ ){
					
					if (isPrime(i)){

						primeNumbers.push(i);

					}

				}

				return primeNumbers;
				

			}

			
		}else{

			return undefined;

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