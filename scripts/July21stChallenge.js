rules = `Return the number (count) of vowels in the given string.<br>
We will consider a, e, i, o, u as vowels (but not y).<br>
The input string will only consist of lower case letters and/or spaces.`;

examples = `getCount(“test”) => 1<br>
getCount(“testing”) => 2<br>
getCount(“i am testing yay”) => 5`;

function getVowels(string) {
    let vowels = string.match(/[aeiou]/g)
    return vowels.length;
}

const text1 = 'test';
const text2 = 'testing';
const text3 = 'i am testing yay';

// Output
document.getElementById('instructions-box').innerHTML = rules;
document.getElementById('examples-box').innerHTML = examples;
document.getElementById('result-box').innerHTML = `
'test' has ${getVowels(text1)} vowels<br>
'testing' has ${getVowels(text2)} vowels<br>
'i am testing yay' has ${getVowels(text3)} vowels`;

