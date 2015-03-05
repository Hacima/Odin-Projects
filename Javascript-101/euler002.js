var sum = 0;
var limit = 4000000;
var fib1 = 2;
var fib2 = 1;
var placeholder = 0;
while (fib1 < limit){
	if(fib1 % 2 === 0){
		sum += fib1;
	}
	placeholder = fib1;
	fib1 += fib2;
	fib2 = placeholder;
}

console.out(sum);