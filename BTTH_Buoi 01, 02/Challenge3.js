//bat dau challeng 3
console.log("challeng 3");
const calcAvgScore = (scores)=>{
    const newScores = scores.filter(score => isNaN(score) ===false)
    const sum = newScores.reduce((a,b)=>a+(b-0),0)
    return Number((sum/newScores.length).toFixed(2));
}

const minScore = 100;
const DophinsScores = [96, 108, 89]
const KoalasScores = [88, 91, 110]

const avgDophins = calcAvgScore(DophinsScores);
const avgKoalas = calcAvgScore(KoalasScores);

if (avgDophins > avgKoalas && avgDophins >= minScore) {
    console.log("Dolphins team win the trophy")
} else if (avgDophins < avgKoalas && avgKoalas >= minScore) {
    console.log("Koalas team win the trophy");
} else if (avgDophins === avgKoalas && avgDophins >= minScore) {
    console.log("The two teams drew")
} else{
    console.log("No team win the trophy");
}
console.log("end chanllenger 3\n\n");

    

    
