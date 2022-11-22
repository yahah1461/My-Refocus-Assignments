let totalBill = 1000;

function computeTip(totalBill){
    return totalBill*0.1;
}

let tip = computeTip(totalBill);

console.log(`Congratulations for a job well done! Your earned tip is ${tip}.00!`);