//bat dau Challenge 2
//import de su dung du lieu o Challenge1
import { calcBMI1, calcBIM2 } from "./Challenge1.js";
console.log("Challenge 2");

//thong tin Data 1:
const inforMark1 = {
    mass: 78,
    height: 1.69
}
const inforJohn1 = {
    mass: 92,
    height: 1.95
}

//thong tin Data 2:
const inforMark2 = {
    mass: 95,
    height: 1.88
}
const inforJohn2 = {
    mass: 85,
    height: 1.76
}

const markHigherBMI1 = calcBMI1(inforMark1.mass, inforMark1.height) >
    calcBMI1(inforJohn1.mass, inforJohn1.height);

const markHigherBMI2 = calcBIM2(inforMark2.mass, inforMark2.height) >
    calcBIM2(inforJohn2.mass, inforJohn2.height);

//1. Print a nice output to the console, saying who has the higher BMI. The message
//is either &quot;Mark&#39;s BMI is higher than John&#39;s!&quot; or &quot;John&#39;
//s BMI is higher than Mark&#39;s!&quot;
console.log("unit1: \n");
if (markHigherBMI1) {
    console.log(`Data 1, Mark's BMI is higher than John's!`);
} else {
    console.log(`Data 1, John's BMI is higher than Mark's!`);
}

if (markHigherBMI2) {
    console.log(`Data 2, Mark's BMI is higher than John's!`);
} else {
    console.log(`Data 2, John's BMI is higher than Mark's!`);
}

//2. Use a template literal to include the BMI values in the outputs.
// Example: &quot;Mark&#39;s
//BMI (28.3) is higher than John&#39;s (23.9)!&quot;
console.log("unit2: \n");
if (markHigherBMI1) {
    console.log(`Data1, Mark's BMI (${calcBMI1(inforMark1.mass, inforMark1.height)}) is higher than John's (${calcBMI1(inforJohn1.mass, inforJohn1.height)})!`);
} else {
    console.log(`Data1, Mark's BMI (${calcBMI1(inforMark1.mass, inforMark1.height)})is lower than John's (${calcBMI1(inforJohn1.mass, inforJohn1.height)})!`);
}

if (markHigherBMI2) {
    console.log(`Data2, Mark's BMI (${calcBIM2(inforMark2.mass, inforMark2.height)})
    is higher than John's (${calcBIM2(inforJohn2.mass, inforJohn2.height)})!`);
} else {
    console.log(`Data2, Mark's BMI (${calcBIM2(inforMark2.mass, inforMark2.height)}) is lower than John's (${calcBIM2(inforJohn2.mass, inforJohn2.height)})!`);
}
//ket thuc challenge 2
console.log("end challenge 2 \n\n");