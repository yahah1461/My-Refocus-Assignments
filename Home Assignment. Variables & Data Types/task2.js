var targetAmount = 10000;
var savedAmount = 7000;

function calcPercentage(value, totalValue){
//    const perc = value/totalValue*100;
    return value/totalValue*100;
}

const percentage = calcPercentage(savedAmount, targetAmount);

const percentToEarn = 100-percentage;

console.log(`Thank you for your discipline and harwork, Sam! You are now ${percentToEarn}% away from your goal of saving PHP ${targetAmount}.00.`);