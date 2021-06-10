rules = `Write a function that will receive an array of strings as its argument <br> 
and return an array of strings <br> 
each representing the longest substring of contiguous vowels ( aeiouAEIOU ).`

examples = `"what a beautiful day today" => contiguous vowel substring: eau<br>
    "it's ok, but very breezy" => contiguous vowel substring: ee`

// Strings
let str1 = "I have no idea what to say.";    
let str2 = "Maybe something with a lot of contiguous vowels in it.";
let str3 = "It's tough to express yourself extemporaneously.";

// Array of strings
let strArray = [str1, str2, str3]

function contiguousVowels(strArr) {
    var result = []
    const hasVowel = /[aeiouAEIOU]+/g;
    for (let i in strArray) { 
        const letters = strArray[i].match(hasVowel);
        if (letters) {
            const longest = letters.reduce((acc, val) => acc.length > val.length ? acc : val, '');
            result.push(longest);
        }
    }
    return result;
}

// Output
document.getElementById('instructions-box').innerHTML = rules;
document.getElementById('examples-box').innerHTML = examples;
document.getElementById("result-box").innerHTML = `
${str1}<br>
${str2}<br>
${str3}<br><br>
contiguous vowel substrings --> [${contiguousVowels(strArray)}]`;