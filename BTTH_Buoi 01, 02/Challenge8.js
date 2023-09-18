console.log("\nChalleng8");
import { calcTip } from "./Challenge6.js";
const billValuesChal8 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []
const calcAvg = (arr) => {
    if (!Array.isArray(arr)) {
       throw new Error("First parameter must be array");     
    }
    
    //request is calc avg contained in array
    const newArr = arr.filter(item => !isNaN(item));
    const sum = newArr.reduce((acc, cur) => {
            return acc + cur
    }, 0)
    return Number((sum/newArr.length).toFixed(2));
}
try {
    billValuesChal8 && billValuesChal8.length > 0 && billValuesChal8.forEach(
        bill => {
            const tip = calcTip(bill)
            tips.push(tip)
            totals.push(bill + tip);
        }
    )
    console.log("Tips: ", tips);
    console.log("Totals: ", totals);
    console.log(`Avg totals ${calcAvg(totals)}`);
} catch (error) {
    console.log(error);
}
console.log("end Challenge8 \n\n");