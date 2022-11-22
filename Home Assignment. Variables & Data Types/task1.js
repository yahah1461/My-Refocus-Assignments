//let caloriesPerHour = 225; Calculation is correct just the name of the variable is not because its perhalfhour


let cal_PerHalfHr = 225;
let daysOfRun = 15;


function calc_caloriesBurned(item1, item2){
    
    return item1*item2;
};



var burnedCal = calc_caloriesBurned(cal_PerHalfHr, daysOfRun);

console.log(`Great work, Sam! After 0.5 hours of running every day for 15 days, you lost ${burnedCal} calories!`);



