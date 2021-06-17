rules = `A man has a old car worth $2000.<br>
    He saw a new car on sale for $8000.<br>
    He wants to keep his old car until he can buy the new one.<br>
    He can save $1000 each month.<br>
    The prices of both the old car and the new one decrease by 1.5% per month.<br>
    Furthermore this percentage of loss increases by 0.5% at the end of every two months.<br><br> 

    Write a function that returns how many months it will take him to save up enough money to buy the car he wants,<br>
    and how much money will he have left over.<br><br>

    The function should take in 4 parameters:<br>
    Old car price, new car price, savings per month, and percent decrease per month.`;

examples = `monthsTillNewCar(2000, 8000, 1000, 1.5)<br>
    ==> returns<br>
    (6, 766)<br>
    It will take 6 months, and he will have $766 dollars left over after buying the car.`;


function timeUntilNewCar(oldCarPrice, newCarPrice, savingsPerMonth, percentDecrease) {

    // Starting car values
    let oldCarValue = oldCarPrice;
    let newCarValue = newCarPrice;

    // Starting funds and month count
    let funds = 0;
    let month = 0;

    // Convert reduction percentage to decimal
    let depreciation = percentDecrease * .01;

    // Remaining funds after purchase
    let remaining = 0;

    // Return results
    let result = [];

    // Calculate while available funds are less than new car price
    while (funds + oldCarPrice < newCarPrice) {
        // Increment month
        month++;
        // Add monthly savings
        funds += savingsPerMonth;

        // Increase depreciation every second month
        if (month % 2 == 0){
            depreciation += .005;
        }
        // Depreciate both vehicles
        oldCarValue = oldCarValue - (oldCarValue * depreciation);
        newCarValue = newCarValue - (newCarValue * depreciation);
    }

    // Calculate remaining funds and round off
    remaining = Math.round((funds + oldCarValue) - newCarValue);
    // Return results
    result.push(month, remaining);
    return result;
}

// Output
document.getElementById('instructions-box').innerHTML = rules;
document.getElementById('examples-box').innerHTML = examples;
document.getElementById('result-box').innerHTML = 
`Old Car Price: $2000<br>
New Car Price: $8000<br>
Saving Per Month: $1000<br>
Monthly Value Decrease: 1.5% (+.5% every two months)<br><br>
Months until purchase:<b>${timeUntilNewCar(2000, 8000, 1000, 1.5)[0]}</b><br>
Remaining funds after purchase: <b>$${timeUntilNewCar(2000, 8000, 1000, 1.5)[1]}</b>;
`