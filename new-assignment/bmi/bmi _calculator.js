/**
    BMI	Status
    ≤ 18.4	Underweight
    18.5 - 24.9	Normal
    25.0 - 39.9	Overweight
    ≥ 40.0	Obese
 */



//let weightInKg = 65;
//let heightInInches = 68.4;

function calc_BMI(weightInKg, heightInInches){
    let forHeignt = heightInInches * 0.025;
    let squared = Math.pow(forHeignt, 2);
    let BMI = weightInKg / squared;
    return BMI;
}

let ss = calc_BMI();

console.log(ss)

var expectedRes = 22.229061933586397;

function testCalc(){
    const result = calc_BMI(65, 68.4);
    
    //console.log(expectedRes, result);
    console.assert(
        expectedRes === result, `The result ${result} doen't match the expected result ${expectedRes}`
    )
}

testCalc()

