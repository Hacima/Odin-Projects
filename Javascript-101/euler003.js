var target = 1000;
var primeList = [2];
var iterator = 3;
var isPrime = true;

while(iterator <= target){
	isPrime = true;
	for(var i = 0; i < primeList.length; i++){
		if(iterator % primeList[i] === 0){
			isPrime = false;
			i = primeList.length;
		}
	}
	if (isPrime === true){
		primeList.push(iterator);
	}
	iterator += 2;
}

console.log(primeList);
