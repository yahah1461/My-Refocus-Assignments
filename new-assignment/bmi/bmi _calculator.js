/**
    BMI	Status
    ≤ 18.4	Underweight
    18.5 - 24.9	Normal
    25.0 - 39.9	Overweight
    ≥ 40.0	Obese
 */



let weightInKg = 65;
let heightInInches = 68.4;

function calc_BMI(){
    let forHeignt = heightInInches * 0.025;
    let squared = Math.pow(forHeignt, 2);
    let BMI = weightInKg / squared;
    return BMI;
}

let ss = calc_BMI();

console.log(ss)