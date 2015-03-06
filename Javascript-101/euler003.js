/*
http://www.theodinproject.com/web-development-101/javascript-basics
https://projecteuler.net/problem=3
This is just pure brute force.. 
It first finds all prime numbers under 100,000 and tests the primes from greatest to 
smallest against the target until it gets a hit.
This will not scale well with larger numbers.
*/

var primeLimit = 100000;
var target  = 600851475143;

/*I save a bit of headache by not starting primeList or iterator at 0 or 1 here.*/
var primeList = [2];
var iterator = 3;
var isPrime = true;

while(iterator <= primeLimit){
    isPrime = true;
	for(var i = 0; i < primeList.length; i++){
		if(iterator % primeList[i] === 0){ 
			isPrime = false;
			break;
		}
	}
	if (isPrime === true){
		primeList.push(iterator);
	}
	iterator += 2; /*Even numbers can't be prime, so we skip them*/
}

console.log("There are "+primeList.length+" primes under "+primeLimit+"!");

iterator = primeList.length - 1;
while (iterator >= 0){
    if(target%primeList[iterator]===0){
        console.log("The largest prime factor under "+primeLimit+" is "+primeList[iterator]+".");
        break;
    }
    iterator--;
}