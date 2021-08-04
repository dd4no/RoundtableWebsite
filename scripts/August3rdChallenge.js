rules = `You will be given an array of drinks, <br>
with each drink being an object with two properties: name and price.<br>
Create a function that has the drinks array as an argument <br>
and return the drinks objects sorted by price in ascending order.`;

examples = `drinks = [<br>
    {name: "lemonade", price: 50},<br>
    {name: "lime", price: 10}<br>
  ]<br>
  
  sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]`;



let drinks = [
    {
    name: "beer",
    price: 6
},
{
    name: "wine",
    price: 8
},
{
    name: "martini",
    price: 12
},
{
    name: "soda",
    price: 3
}];
let drinksString = JSON.stringify(drinks);

let sortDrinks = (drinks) => {
    drinks.sort((a,b) => (a.price > b.price) ? 1 : -1);
    let result = JSON.stringify(drinks)
    return result;
}

document.getElementById("instructions-box").innerHTML = rules;
document.getElementById("examples-box").innerHTML = examples;
document.getElementById("result-box").innerHTML =`
List of drinks: <br>
${drinksString} <br>
<br>
Sorted by price (low to high): <br>
${sortDrinks(drinks)}`
