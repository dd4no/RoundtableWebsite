//Challenge
rules = `Given a sequence of valid words as a string, <br>
 test if the string is made up by one or more of the words from the array.`

examples = `var words = ['The', 'Tech', 'Roundtable']<br><br>
 'The Tech Roundtable' = true<br>
 'The Tech Roundtables' = false<br>
 'A Tech Roundtable' = false<br>`

let words = ['The', 'Tech', 'Roundtable']

//test cases:
let sentence1 = 'The Tech Roundtable' //true
let sentence2 = 'The Tech Roundtables'//false
let sentence3 = 'A Tech Roundtable'   //false
let sentence4 = 'Roundtable Tech The' //true
let sentence5 = 'the tech roundtable' //true

function validWords(array, string){
    array = array.sort();
    string = string.toLowerCase().split(" ").sort();
    return string.length === array.length && string.every((element, index) =>
        element === array[index].toLowerCase());
}

//Output to window here:
document.getElementById("instructions-box").innerHTML = rules;
document.getElementById("examples-box").innerHTML = examples;
document.getElementById("result-box").innerHTML = `Can 'sentence' be constructed from 'array'? <br><br>
Array: [${words}] <br><br>
Sentence: ${sentence1} <br> Result: ${validWords(words, sentence1)}</br></br>
Sentence: ${sentence2} <br> Result: ${validWords(words, sentence2)}</br></br>
Sentence: ${sentence3} <br> Result: ${validWords(words, sentence3)}</br></br>
Sentence: ${sentence4} <br> Result: ${validWords(words, sentence4)}</br></br>
Sentence: ${sentence5} <br> Result: ${validWords(words, sentence5)}`