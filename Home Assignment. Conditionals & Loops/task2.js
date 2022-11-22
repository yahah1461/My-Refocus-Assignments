/**
    40-100 Normal reading.
    101-109 Acceptable to continue home monitoring.
    110-130 Seek advice from health professionals.
    ≥ 131 Seek urgent medical advice. 

 */

let tempPulse = [99, 101, 130, 200, 2];
let pulseAlert = "";

// function pulseReader(value){
//     if(value >=40 && value <=100){
//         return pulseAlert="Normal Pulse...";
//     }
// }

pulseReader = (value) => {
    if(value >=40 && value <=100){
        pulseAlert="Normal Pulse...";
    }
    else if(value >=101 && value<=109){
        pulseAlert="Acceptable to continue home monitoring.";
    }
    else if(value >=110 && value<=130){
        pulseAlert="Seek advice from health professionals.";
    }
    else if(value >=131){
        pulseAlert="Seek urgent medical advice.";
    }
    else (
        pulseAlert="Please check the patient if he / she is still alive!"
    )
}

for(i=0; i<=tempPulse.length-1; i++){
    pulseReader(tempPulse[i]);
    console.log(pulseAlert+"\n");
}
