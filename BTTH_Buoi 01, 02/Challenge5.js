console.log("Challenge5");
const calcAvg = (score1, score2, score3) =>{
    if (isNaN(score1) || isNaN(score2) || isNaN(score3)) {
        throw new Error("all score must be number!");
    }
    return Number(((Number(score1) + Number(score2) + Number(score3))/3)
    .toFixed(2));
}

const checkTheWinner = (avgDophins, avgkoalas) =>{
    if (isNaN(avgDophins) || isNaN(avgkoalas)) {
        console.log("checkTheWinner function need all parameter are Number");
        return;
    }
    const numberAvgDolhins = Number(avgDophins)
    const numberAvgKoalas = Number(avgkoalas)


    if (numberAvgDolhins >= numberAvgKoalas * 2 ) {
        console.log(`Dolhins win (${numberAvgDolhins} VS ${numberAvgKoalas})`);
    }else if (numberAvgKoalas >= numberAvgDolhins * 2) {
        console.log(`Koalas win (${numberAvgKoalas} VS ${numberAvgDolhins})`);
    }else  {
        console.log("No team win ");
    }
}
try {
    const scoreAvgDolhins = calcAvg(44, 23, 71 );
    const scoreAvgKoalas = calcAvg(65, 54, 49);
    console.log("data1 result: ");
    checkTheWinner(scoreAvgDolhins, scoreAvgKoalas);

    const scoreAvgDolhins2 = calcAvg(85, 54, 41);
    const scoreAvgKoalas2 = calcAvg(23, 34, 27);
    console.log("data2 result: ");
    checkTheWinner(scoreAvgDolhins2, scoreAvgKoalas2);

} catch (error) {
    console.log(error);
}
console.log("end chalelnge5 \n\n");