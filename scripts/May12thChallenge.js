rules = `Implement a function that adds two numbers together and returns the sum in binary.<br>
 The conversion can occur either before or after the calculation.`

examples = `1 + 3 = 100 (binary for 4)<br>
    8 + 4 = 110 (binary for 12)`

function addNumbers(num1, num2){
    let result = num1 + num2;
    return result.toString(2);
}

// Output
document.getElementById('instructions-box').innerHTML = rules;
document.getElementById('examples-box').innerHTML = examples;
document.getElementById('result-box').innerHTML = 
`512 + 200 = 712 --> ${addNumbers(512,200)}<br>
17 + 19 = 36 --> ${addNumbers(17,19)}<br>
3000 + 487 = 3487 --> ${addNumbers(3000,487)}`;

