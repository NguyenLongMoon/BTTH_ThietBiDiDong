//bat dau bai Challenger 1
console.log("\n Challenger 1");
//tinh chi so BMI cach 1
//lam tron den chu so thap phan thu 1 sau dau phay
const calcBMI1 = (mass, height) => {
        return Number((mass / (height ** 2)).toFixed(1));
    }
    //thong tin data1
const inforMark1 = {
    mass: 78,
    height: 1.69
}

const inforJohn1 = {
        mass: 92,
        height: 1.95
    }
    //tao bien Boolean "markHigherBMI", lieu rang chi so BMI cua Mark1 co lon hon cua John1
const markHigherBMI1 = calcBMI1(inforMark1.mass, inforMark1.height) >
    calcBMI1(inforJohn1.mass, inforJohn1.height);

//tinh chi so BMI cach 2
const calcBIM2 = (mass, height) => {
        return Number((mass / (Math.pow(height, 2))).toFixed(1));
    }
    //thong tin Data2
const inforMark2 = {
    mass: 95,
    height: 1.88
}

const inforJohn2 = {
        mass: 85,
        height: 1.76
    }
    //tao bien Boolean "markHigherBMI", lieu rang chi so BMI cua Mark2 co lon hon cua John2
const markHighterBMI2 = calcBIM2(inforMark2.mass, inforMark2.height) >
    calcBIM2(inforJohn2.mass, inforJohn2.height);
//hien thi ket qua, su dung template string
console.log(`Data1, markHigherBMI1: ${markHigherBMI1}`);
console.log(`Data2, markHigherBMI2: ${markHighterBMI2}`);
// export calcBMI1 va calcBIM2 de dung cho bai sau
export { calcBMI1, calcBIM2 };
//ket thuc bai challenge1
console.log("end Challenge1 \n\n");