rules = `Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.`

//  For Example:
//  largestSwap(27) ==> false
//  largestSwap(43) ==> true

// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

function largestSwap(num) {
let result = num.toString().split('').reverse().join('');
return num > result;
}


//console.log(largestSwap(27));
//console.log(largestSwap(43));

//Output to window here:
document.getElementById("instructions-box").innerHTML = rules;
document.getElementById("result-box").innerHTML =
`Swap the digits of a two digit number.<br>
Is the original number larger than the swapped number?<br>
27 => 72: ${largestSwap(27)}<br>
43 => 34: ${largestSwap(43)}<br>
65 => 56: ${largestSwap(65)}<br>
88 => 88: ${largestSwap(88)}<br>
92 => 29: ${largestSwap(92)}<br>`
