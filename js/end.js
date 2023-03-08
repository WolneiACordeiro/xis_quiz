const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
let mostRecentScore = localStorage.getItem('mostRecentScore');
const mostRecentName = localStorage.getItem('name');
const mostRecentTitle = localStorage.getItem('title');
const showUserName = document.getElementById('showUserName');
const showTest = document.getElementById('showTest');
const scoreText = document.getElementById("scoreText");
const percent = document.getElementById('percent');
//const questionCounter = localStorage.getItem('rQuestionCounter');

showUserName.innerText = `${mostRecentName}`;
showTest.innerText = `Você terminou a prova de ${mostRecentTitle}.`;

const percentCalc = (mostRecentScore / 10) * 100;
percent.innerText = `Porcentagem \n ${percentCalc}%`;

mostRecentScore = parseFloat(mostRecentScore);
finalScore.innerText = `${mostRecentScore.toFixed(1)}`;

scoreText.innerText = `Acertos \n ${mostRecentScore}/10`;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const mostRecentRecap = JSON.parse(localStorage.getItem('mostRecentRecap')) || [];

mostRecentRecap.forEach( mostRecentRecap => {
    const convertTxtAnswer = JSON.parse(mostRecentRecap.rUserAnswer);
    const recapTxtAnswer = `r${convertTxtAnswer}`;

    document.getElementById("currentQuestions").innerHTML += `
        <div class="title-question-pointer">
            <h1 class="currentProgress" id="currentProgress">Questão ${mostRecentRecap.rQuestionCounter}</h1>
            <p id="progressText" class="hud-prefix">${mostRecentRecap.rQuestionCounter} de 10
            </p>
        </div>

        <h2 id="question" class="question">${mostRecentRecap.rQuestion}</h2>
    `;

    for (i=1; i<=4; i++) {
        const answerIdMark = ["A-)", "B-)", "C-)", "D-)"];
        const getAnswerTxt = "mostRecentRecap.r"+i;
        const getAnswer = eval(getAnswerTxt);
        
        if(i != mostRecentRecap.rUserAnswer && i == mostRecentRecap.rCorrectAnswer){
            document.getElementById("currentQuestions").innerHTML += `
            <div class="choice-container-result">
                <p class="choice-text supcorrect" data-number="${i}">${answerIdMark[i-1]} ${getAnswer}</p>
            </div>
            `;
        } else if (i == mostRecentRecap.rUserAnswer && mostRecentRecap.rUserAnswer == mostRecentRecap.rCorrectAnswer) {
            document.getElementById("currentQuestions").innerHTML += `
            <div class="choice-container-result">
                <p class="choice-text correct" data-number="${i}">${answerIdMark[i-1]} ${getAnswer}</p>
            </div>
            `
        } else if (i == mostRecentRecap.rUserAnswer && mostRecentRecap.rUserAnswer != mostRecentRecap.rCorrectAnswer) {
            document.getElementById("currentQuestions").innerHTML += `
            <div class="choice-container-result">
                <p class="choice-text incorrect" data-number="${i}">${answerIdMark[i-1]} ${getAnswer}</p>
            </div>
            `
        } else {
            document.getElementById("currentQuestions").innerHTML += `
            <div class="choice-container-result">
                <p class="choice-text" data-number="${i}">${answerIdMark[i-1]} ${getAnswer}</p>
            </div>
            `
        }
    };

    document.getElementById("currentQuestions").innerHTML += `
        <div class="explanation" id="explanation">
        <br><br>
            <h3>Explicação</h3>
            <p id="explanationDesc">${mostRecentRecap.rExplanation}</p>
            <hr>
        </div>

    `;
    

});

const MAX_HIGH_SCORES = 5;

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

    window.location.assign('../index.html');

};