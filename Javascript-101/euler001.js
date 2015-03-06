/*
http://www.theodinproject.com/web-development-101/javascript-basics
https://projecteuler.net/problem=1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

This is an extremely simple program. We count from 1 to 1000 and check each number if it is a 
product of 3 or 5. Then we add it to our sum variable and continue until we reach 1000. 
I've noticed that in many student solutions they include 1000 with a <= operator. The instructions
specify 'below' 1000, which is why I did not use an inclusive operator.
*/

var sum = 0;
for(var i = 1; i < 1000; i++){
    if((i % 3 === 0)||(i % 5 === 0)){
		sum += i;
	}
}
console.log(sum); /* 233168 */