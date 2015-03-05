/*
Very unfinished! Currently just a prime generator. I'm not sure if I'm barking up the right tree!
*/

var target = 1000;

/*I save a bit of headache by not starting primeList or iterator at 0 or 1 here.*/
var primeList = [2];
var iterator = 3;

var isPrime = true;

while(iterator <= target){
	isPrime = true;
	for(var i = 0; i < primeList.length; i++){
		if(iterator % primeList[i] === 0){
			isPrime = false;
			i = primeList.length; /*Should I just use a 'break' command here?*/
		}
	}
	if (isPrime === true){
		primeList.push(iterator);
	}
	iterator += 2; /*Even numbers can't be prime...*/
}

console.log(primeList);