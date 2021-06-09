let rules = "Implement a function that adds two numbers together and returns the sum in binary.<br> The conversion can occur either before or after the calculation."

function addNumbers(num1, num2){
    let result = num1 + num2;
    return result.toString(2);
}

document.getElementById('instructions-box').innerHTML = rules;
document.getElementById('result-box').innerHTML = 
`512 + 200 = 712 => in binary: ${addNumbers(512,200)}<br>
17 + 19 = 36 => in binary: ${addNumbers(17,19)}<br>
3000 + 487 = 3487 => in binary: ${addNumbers(3000,487)}`;

