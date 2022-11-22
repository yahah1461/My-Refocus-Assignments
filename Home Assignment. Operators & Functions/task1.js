//Kelvin Formula - Celcius temperature + 273.15

let tempCelcius = 87;
let tempFahrenheit = 69;

function celciusToKelvin(celcius){
    return celcius + 273.15;
}

function fahrenheitToKelvin(fahrenheit){
    let inKelvin = ((fahrenheit-32)*5)/9+273.15;
    return inKelvin;
}

let inCelcius = celciusToKelvin(tempCelcius);
let inKelvin = fahrenheitToKelvin(tempFahrenheit);

console.log(`The temperature 87 degree celcius when converted to Kelvin is ${inCelcius} Kelvins.\n`);
console.log(`The temperature 69 degree celcius when converted to Kelvin is ${inKelvin} Kelvins.`);






