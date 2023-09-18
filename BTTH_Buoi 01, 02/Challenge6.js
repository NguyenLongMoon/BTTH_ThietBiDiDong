console.log("\n Challenge6");
export const calcTip = (bill) =>{
    if (isNaN(bill)) {
        //bill value must be number 
        throw new Error("bill value must be number");
    }
//      Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
    let tip = (bill >= 50  && bill <= 300) ? bill  * 0.15 : bill * 0.2;
    tip = Number(tip.toFixed(2));
    return tip;
}
// Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before

const  tips = [];

// Create an array 'total' containing the total values, so the bill + tip

const total = [];

//If billValues ​​is declared, it will overlap with another file variable
const billValuesChal6 = [125, 555, 44];
try {
    billValuesChal6 && billValuesChal6.length > 0
     && billValuesChal6.forEach((bill) => {
            const tip = calcTip(bill);
            tips.push(tip);
            total.push(bill + tip);
     })
} catch (error) {
    console.log(error);
}
console.log("Bills", billValuesChal6);
console.log("Tips", tips);
console.log("Total", total);
console.log("end challenge 6 \n\n");