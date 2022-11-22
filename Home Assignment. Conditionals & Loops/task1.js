/** 
    ≥ 96% Normal reading.
    95% Acceptable to continue home monitoring.
    93–94% Seek advice from health professionals.
    ≤ 92% Seek urgent medical advice.
*/

const oxygenLevel = 100;

for(i=0; i<=oxygenLevel; i++){
    if(i>=96){
        console.log(`${i}% Normal Reading.`)
    }
    else if(i==95){
        console.log(`${i}% Acceptable to continue home monitoring.`);
    }
    else if(i>=93 && i<=94){
        console.log(`${i}% Seek advice from health professionals.`);
    }
    else if(i<=92){
        console.log(`${i}% Seek urgent medical advice.`);
    }
    else{
        console.log("Invalid!")
    }
    
    
}

