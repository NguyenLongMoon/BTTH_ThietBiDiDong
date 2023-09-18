console.log("\nChalleng7");
const calcBMI = (user) => {
    const {mass, height} = user;
    if (isNaN(mass) || isNaN(height)) {
        throw new Error("mass, height must be number");
    }
    const BMI = Number((mass / (height ** 2)).toFixed(1));
    return {
        ...user,
        BMI
    }
}
//Information
let johnInfo = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95
}
//Information
let markInfor = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69    
}
try {
    johnInfo = calcBMI(johnInfo);
    markInfor = calcBMI(markInfor);

//Condition 
    if (johnInfo.BMI > markInfor.BMI) {
        console.log(`${johnInfo.fullname.split(/\s/)[0] + "'s"} BMI (${johnInfo.BMI})
        is higher than ${markInfor.fullname.split(/\s/)[0] + "'s"} 
        (${markInfor.BMI})`);
    } else if (markInfor.BMI > johnInfo.BMI) {
        console.log(`${markInfor.fullname.split(/\s/)[0] + "'s"} BMI (${markInfor.BMI}) is higher than ${johnInfo.fullname.split(/\s/)[0] + "'s"}  BMI (${johnInfo.BMI})`);
    } else{
        console.log(`Both ${johnInfo.fullname.split(/\s/)[0] + "'s"} and 
        ${markInfor.fullname.split(/\s/)[0] + "'s"} equal`);
    }
} catch (error) {
    console.log(error);
}
console.log("end Challeng7 \n\n");