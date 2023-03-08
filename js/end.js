const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const mostRecentName = localStorage.getItem('name');
const mostRecentTitle = localStorage.getItem('title');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const mostRecentRecap = JSON.parse(localStorage.getItem('mostRecentRecap')) || [];

mostRecentRecap.forEach( mostRecentRecap => {
    const convertTxtAnswer = JSON.parse(mostRecentRecap.rUserAnswer);
    const recapTxtAnswer = `r${convertTxtAnswer}`;
    console.log(recapTxtAnswer);

    document.getElementById("question").innerHTML += `
    <br><hr>
    <p>${mostRecentRecap.rQuestion}</p>
    `;

    for (i=1; i<=4; i++) {
        const getAnswerTxt = "mostRecentRecap.r"+i;
        const getAnswer = eval(getAnswerTxt);
        
        if(i != mostRecentRecap.rUserAnswer && i == mostRecentRecap.rCorrectAnswer){
            document.getElementById("question").innerHTML += `
                <p class="choice-text supcorrect" data-number="${i}"> ${getAnswer}</p>
            `
        } else if (i == mostRecentRecap.rUserAnswer && mostRecentRecap.rUserAnswer == mostRecentRecap.rCorrectAnswer) {
            document.getElementById("question").innerHTML += `
                <p class="choice-text correct" data-number="${i}"> ${getAnswer}</p>
            `
        } else if (i == mostRecentRecap.rUserAnswer && mostRecentRecap.rUserAnswer != mostRecentRecap.rCorrectAnswer) {
            document.getElementById("question").innerHTML += `
                <p class="choice-text incorrect" data-number="${i}"> ${getAnswer}</p>
            `
        } else {
            document.getElementById("question").innerHTML += `
                <p class="choice-text" data-number="${i}"> ${getAnswer}</p>
            `
        }

    };

    document.getElementById("question").innerHTML += `
    <p>Explicação: ${mostRecentRecap.rExplanation}</p><br><hr>
    `;


})

const MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

console.log(mostRecentRecap);

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: mostRecentName,
        title: mostRecentTitle
    };

    highScores.push(score);

    highScores.sort((a,b) => b.score - a.score);

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    window.location.assign('./');

    console.log(highScores);
};